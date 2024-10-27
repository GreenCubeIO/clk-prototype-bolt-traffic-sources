"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { ITrafficSource, IEvent } from "@/lib/types/traffic";
import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { Switch } from "@/components/ui/switch";
import { Plus, Trash2, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

const EVENT_TYPES = {
  CONVERSION: {
    label: "Conversion Events",
    description: "Track successful conversions and leads",
    badge: "success"
  },
  OFFER_CLICK: {
    label: "Offer Click Events",
    description: "Track clicks on offers and advertisements",
    badge: "warning"
  },
  PAGE_VIEW: {
    label: "Page View Events",
    description: "Track page views and user engagement",
    badge: "default"
  }
} as const;

export function EventsForm() {
  const { control } = useFormContext<ITrafficSource>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "events"
  });

  const addEvent = (type: "CONVERSION" | "OFFER_CLICK" | "PAGE_VIEW") => {
    append({
      enabled: true,
      type: "NATIVE",
      name: "",
      event: type,
      serverToServerURL: "",
      trafficSource: "",
      account: []
    } as IEvent);
  };

  // Group events by type
  const groupedEvents = fields.reduce((acc, field, index) => {
    const event = field as unknown as IEvent;
    if (!acc[event.event]) {
      acc[event.event] = [];
    }
    acc[event.event].push({ ...event, index });
    return acc;
  }, {} as Record<string, (IEvent & { index: number })[]>);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Events Configuration</h3>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => addEvent("CONVERSION")}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Conversion
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => addEvent("OFFER_CLICK")}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Offer Click
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => addEvent("PAGE_VIEW")}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Page View
          </Button>
        </div>
      </div>

      {fields.length === 0 && (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            No events configured. Add events to track different user interactions.
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-8">
        {(Object.keys(EVENT_TYPES) as Array<keyof typeof EVENT_TYPES>).map((eventType) => {
          const events = groupedEvents[eventType] || [];
          if (events.length === 0) return null;

          return (
            <div key={eventType} className="space-y-4">
              <div className="flex items-center gap-3">
                <h4 className="font-medium text-lg">{EVENT_TYPES[eventType].label}</h4>
                <Badge variant={EVENT_TYPES[eventType].badge as any}>
                  {events.length} {events.length === 1 ? 'event' : 'events'}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {EVENT_TYPES[eventType].description}
              </p>

              <div className="grid gap-4">
                {events.map(({ index }) => (
                  <Card key={fields[index].id} className="p-4">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Switch
                            {...control.register(`events.${index}.enabled`)}
                          />
                          <Badge variant="outline">
                            {eventType.replace('_', ' ')}
                          </Badge>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => remove(index)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="grid gap-4">
                        <FloatingLabelInput
                          {...control.register(`events.${index}.name`)}
                          label="Event Name"
                        />

                        <FloatingLabelInput
                          {...control.register(`events.${index}.serverToServerURL`)}
                          label="Server to Server URL"
                          type="url"
                        />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}