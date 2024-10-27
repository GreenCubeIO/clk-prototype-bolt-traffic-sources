"use client";

import { Controller, useFormContext } from "react-hook-form";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IOffer } from "@/lib/types/offer";

const DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const;

export function DailyCapForm() {
  const { control } = useFormContext<IOffer>();

  return (
    <div className="space-y-6">
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th className="pb-4 font-medium">Day</th>
            <th className="pb-4 font-medium">Uncapped</th>
            <th className="pb-4 font-medium">No Leads Allowed</th>
            <th className="pb-4 font-medium">Cap</th>
            <th className="pb-4 font-medium">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {DAYS.map((day) => (
            <tr key={day} className="border-t">
              <td className="py-4 capitalize">{day}</td>
              <td className="py-4">
                <Controller
                  name={`daily_cap.days.${day}.uncapped`}
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <Switch
                      checked={value}
                      onCheckedChange={onChange}
                    />
                  )}
                />
              </td>
              <td className="py-4">
                <Controller
                  name={`daily_cap.days.${day}.no_leads_allowed`}
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <Switch
                      checked={value}
                      onCheckedChange={onChange}
                    />
                  )}
                />
              </td>
              <td className="py-4">
                <div className="flex items-center gap-2">
                  <Controller
                    name={`daily_cap.days.${day}.amount`}
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="number"
                        value={field.value || ''}
                        className="w-24"
                        disabled={field.value === null}
                      />
                    )}
                  />
                  <Label>CVRS</Label>
                </div>
              </td>
              <td className="py-4">
                <div className="flex items-center gap-2">
                  <Controller
                    name={`daily_cap.days.${day}.revenue`}
                    control={control}
                    render={({ field }) => (
                      <Input
                        {...field}
                        type="number"
                        value={field.value || ''}
                        className="w-24"
                        disabled={field.value === null}
                      />
                    )}
                  />
                  <Label>REVENUE</Label>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Label>Alert Percentage</Label>
          <Controller
            name="daily_cap.percentage_alert"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="number"
                min={1}
                max={100}
                value={field.value || ''}
                className="w-24"
              />
            )}
          />
        </div>
      </div>
    </div>
  );
}