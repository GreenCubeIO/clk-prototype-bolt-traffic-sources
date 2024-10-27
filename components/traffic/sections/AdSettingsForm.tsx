"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { ITrafficSource, IAdSettings } from "@/lib/types/traffic";
import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { Switch } from "@/components/ui/switch";
import { Plus, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export function AdSettingsForm() {
  const { control } = useFormContext<ITrafficSource>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "ad_settings"
  });

  const addAdSetting = () => {
    append({
      name: "",
      allows_images: true,
      display_name: { enabled: false, max_length: 50 },
      display_url: { enabled: false, max_length: 100 },
      call_to_action: { enabled: false },
      description: { enabled: false, max_length: 0 },
      headline: { enabled: true, max_length: 140 },
      sub_headline: { enabled: false, max_length: 0 },
      adi: {
        dimensions: { width: 1200, height: 800 },
        enabled: true
      },
      secondary_adi: {
        dimensions: { width: 1200, height: 800 },
        enabled: true
      },
      thumbnail_adi: {
        dimensions: { width: 1200, height: 800 },
        enabled: true
      }
    } as IAdSettings);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Ad Settings</h3>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={addAdSetting}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Ad Setting
        </Button>
      </div>

      <div className="space-y-4">
        {fields.map((field, index) => (
          <Card key={field.id} className="p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <FloatingLabelInput
                  {...control.register(`ad_settings.${index}.name`)}
                  label="Ad Setting Name"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => remove(index)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <span className="text-sm text-muted-foreground">Allow Images</span>
                  <Switch
                    {...control.register(`ad_settings.${index}.allows_images`)}
                  />
                </div>

                <div className="space-y-2">
                  <span className="text-sm text-muted-foreground">Round Robin</span>
                  <Switch
                    {...control.register(`ad_settings.${index}.round_robin`)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <span className="text-sm text-muted-foreground">Headline</span>
                  <div className="flex items-center gap-4">
                    <Switch
                      {...control.register(`ad_settings.${index}.headline.enabled`)}
                    />
                    <FloatingLabelInput
                      {...control.register(`ad_settings.${index}.headline.max_length`)}
                      type="number"
                      label="Max Length"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-sm text-muted-foreground">Description</span>
                  <div className="flex items-center gap-4">
                    <Switch
                      {...control.register(`ad_settings.${index}.description.enabled`)}
                    />
                    <FloatingLabelInput
                      {...control.register(`ad_settings.${index}.description.max_length`)}
                      type="number"
                      label="Max Length"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}