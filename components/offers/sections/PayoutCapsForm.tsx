"use client";

import { useFormContext, Controller } from "react-hook-form";
import { IOffer } from "@/lib/types/offer";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { FloatingLabelSelect } from "@/components/ui/floating-label-select";
import { DailyCapForm } from "./DailyCapForm";
import { DailyCapsInputs } from "./DailyCapsInputs";
import { CapAlerts } from "./CapAlerts";
import { MediaBuyerSelect } from "./MediaBuyerSelect";

export function PayoutCapsForm() {
  const { control, watch } = useFormContext<IOffer>();
  const capType = watch("daily_cap.cap_type") || "uncapped";

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Payout & Caps</h3>

      <Controller
        name="payout"
        control={control}
        defaultValue={0}
        render={({ field, fieldState: { error } }) => (
          <FloatingLabelInput
            {...field}
            type="number"
            label="Payout Amount"
            error={error?.message}
            min={0}
            step="0.01"
          />
        )}
      />

      <Controller
        name="daily_cap.cap_type"
        control={control}
        defaultValue="uncapped"
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <FloatingLabelSelect
            label="Cap Type"
            value={value || "uncapped"}
            onValueChange={onChange}
            error={error?.message}
            options={[
              { label: "Uncapped", value: "uncapped" },
              { label: "Daily Cap", value: "daily_cap" },
              { label: "Cap by Day", value: "cap_by_day" },
            ]}
          />
        )}
      />

      {capType === "daily_cap" && (
        <div className="space-y-6">
          <DailyCapsInputs control={control} />
          <CapAlerts control={control} />
          <MediaBuyerSelect control={control} />
        </div>
      )}

      {capType === "cap_by_day" && <DailyCapForm />}
    </div>
  );
}