"use client";

import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";

interface CapAlertsProps {
  control: any;
}

export function CapAlerts({ control }: CapAlertsProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h4 className="font-medium">Cap Alerts</h4>
        <p className="text-sm text-muted-foreground">
          Enable notifications when cap is reached
        </p>
      </div>
      <div className="space-y-2">
        <Controller
          name="daily_cap.percentage_alert"
          control={control}
          defaultValue={80}
          render={({ field }) => (
            <div className="flex items-center gap-2">
              <Input
                {...field}
                type="number"
                className="w-24"
                value={field.value || 80}
                onChange={(e) => field.onChange(Number(e.target.value))}
                min={0}
                max={100}
              />
              <span className="text-sm text-muted-foreground">%</span>
            </div>
          )}
        />
      </div>
    </div>
  );
}