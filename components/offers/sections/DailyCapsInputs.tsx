"use client";

import { Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface DailyCapsInputsProps {
  control: any;
}

export function DailyCapsInputs({ control }: DailyCapsInputsProps) {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label>CVRS</Label>
        <div className="flex items-center gap-2">
          <Controller
            name="daily_cap.cvrs"
            control={control}
            defaultValue={500}
            render={({ field, fieldState: { error } }) => (
              <div className="space-y-1">
                <Input
                  {...field}
                  type="number"
                  value={field.value || 500}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  min={0}
                  className={error ? "border-red-500" : ""}
                />
                {error && (
                  <span className="text-sm text-red-500">{error.message}</span>
                )}
              </div>
            )}
          />
          <span className="text-sm text-muted-foreground">CVRS</span>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Revenue</Label>
        <div className="flex items-center gap-2">
          <Controller
            name="daily_cap.revenue"
            control={control}
            defaultValue={0}
            render={({ field, fieldState: { error } }) => (
              <div className="space-y-1">
                <Input
                  {...field}
                  type="number"
                  value={field.value || 0}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  min={0}
                  step="0.01"
                  className={error ? "border-red-500" : ""}
                />
                {error && (
                  <span className="text-sm text-red-500">{error.message}</span>
                )}
              </div>
            )}
          />
          <span className="text-sm text-muted-foreground">USD</span>
        </div>
      </div>
    </div>
  );
}