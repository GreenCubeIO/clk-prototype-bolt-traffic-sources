"use client";

import { useFormContext, Controller } from "react-hook-form";
import { IOffer } from "@/lib/types/offer";
import { FloatingLabelSelect } from "@/components/ui/floating-label-select";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { Switch } from "@/components/ui/switch";

export function LeadActionForm() {
  const { control, watch } = useFormContext<IOffer>();
  const leadActionGoal = watch("lead_action_goal");

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Lead Action Settings</h3>

      <Controller
        name="lead_action_goal"
        control={control}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <FloatingLabelSelect
            label="Lead Action Goal"
            value={value}
            onValueChange={onChange}
            error={error?.message}
            options={[
              { label: 'Redirect', value: 'REDIRECT' },
              { label: 'Call', value: 'CALL' },
            ]}
          />
        )}
      />

      {leadActionGoal === 'REDIRECT' && (
        <Controller
          name="url"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FloatingLabelInput
              {...field}
              label="Offer URL"
              type="url"
              error={error?.message}
            />
          )}
        />
      )}

      {leadActionGoal === 'CALL' && (
        <div className="space-y-4">
          <Controller
            name="call_tracking.provider.name"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <FloatingLabelSelect
                label="Call Tracking Provider"
                value={value}
                onValueChange={onChange}
                error={error?.message}
                options={[
                  { label: 'Retreaver', value: 'Retreaver' },
                  { label: 'Ringba', value: 'Ringba', disabled: true },
                ]}
              />
            )}
          />

          <Controller
            name="call_tracking.campaign.name"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <FloatingLabelSelect
                label="Call Tracking Campaign"
                value={value}
                onValueChange={onChange}
                error={error?.message}
                options={[
                  { label: 'Click-To-Call-Test', value: 'Click-To-Call-Test' },
                ]}
              />
            )}
          />
        </div>
      )}

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium">Fire Traffic Source Pixel</h4>
            <p className="text-sm text-muted-foreground">Enable pixel firing for traffic sources</p>
          </div>
          <Controller
            name="fire_traffic_souce_pixel"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Switch
                checked={value}
                onCheckedChange={onChange}
              />
            )}
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium">Allow Zero Amount Pixel Firing</h4>
            <p className="text-sm text-muted-foreground">Allow pixels to fire even with zero amount</p>
          </div>
          <Controller
            name="allow_zero_amount_pixel_firing"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Switch
                checked={value}
                onCheckedChange={onChange}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
}