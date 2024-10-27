"use client";

import { useFormContext, Controller } from "react-hook-form";
import { IOffer } from "@/lib/types/offer";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { FloatingLabelSelect } from "@/components/ui/floating-label-select";
import { Switch } from "@/components/ui/switch";

export function BasicInfoForm() {
  const { control } = useFormContext<IOffer>();

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Basic Information</h3>
      
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <FloatingLabelInput
            {...field}
            label="Offer Name"
            error={error?.message}
          />
        )}
      />

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-muted-foreground">Active Status</span>
          <Controller
            name="status"
            control={control}
            render={({ field: { value, onChange } }) => (
              <div className="flex items-center space-x-2">
                <Switch
                  checked={value === 'active'}
                  onCheckedChange={(checked) => onChange(checked ? 'active' : 'inactive')}
                />
                <span>{value === 'active' ? 'Active' : 'Inactive'}</span>
              </div>
            )}
          />
        </div>

        <Controller
          name="time_zone_name"
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <FloatingLabelSelect
              label="Time Zone"
              value={value}
              onValueChange={onChange}
              error={error?.message}
              options={[
                { label: 'UTC', value: 'UTC' },
                { label: 'EST', value: 'EST5EDT' },
                { label: 'PST', value: 'PST8PDT' },
              ]}
            />
          )}
        />
      </div>

      <Controller
        name="income_type"
        control={control}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <FloatingLabelSelect
            label="Income Type"
            value={value}
            onValueChange={onChange}
            error={error?.message}
            options={[
              { label: 'Main', value: 'main' },
              { label: 'Secondary', value: 'secondary' },
            ]}
          />
        )}
      />

      <Controller
        name="category.name"
        control={control}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <FloatingLabelSelect
            label="Category"
            value={value}
            onValueChange={onChange}
            error={error?.message}
            options={[
              { label: 'Life Insurance - US', value: 'Life Insurance - US' },
              { label: 'Health Insurance', value: 'Health Insurance' },
              { label: 'Auto Insurance', value: 'Auto Insurance' },
            ]}
          />
        )}
      />
    </div>
  );
}