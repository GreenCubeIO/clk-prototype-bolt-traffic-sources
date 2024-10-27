"use client";

import { useFormContext, Controller } from "react-hook-form";
import { IOffer } from "@/lib/types/offer";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { Globe } from "lucide-react";

export function OfferContentForm() {
  const { control } = useFormContext<IOffer>();

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Offer Content</h3>

      <Controller
        name="content.name"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <FloatingLabelInput
            {...field}
            label="Content Name"
            error={error?.message}
          />
        )}
      />

      <Controller
        name="content.url"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <FloatingLabelInput
            {...field}
            label="Content URL"
            type="url"
            startIcon={<Globe className="w-4 h-4" />}
            error={error?.message}
          />
        )}
      />
    </div>
  );
}