"use client";

import { useFormContext, Controller } from "react-hook-form";
import { IOffer } from "@/lib/types/offer";
import { Textarea } from "@/components/ui/textarea";

export function DisclaimerForm() {
  const { control } = useFormContext<IOffer>();

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Disclaimer</h3>

      <Controller
        name="disclaimer"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <div className="space-y-2">
            <Textarea
              {...field}
              placeholder="Enter disclaimer text..."
              className="min-h-[200px]"
            />
            {error?.message && (
              <p className="text-sm text-destructive">{error.message}</p>
            )}
          </div>
        )}
      />
    </div>
  );
}