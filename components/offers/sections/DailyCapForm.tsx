"use client";

import { useFormContext, Controller } from "react-hook-form";
import { IOffer } from "@/lib/types/offer";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

const DAYS = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;

export function DailyCapForm() {
  const { control } = useFormContext<IOffer>();

  return (
    <div className="mt-6">
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th className="pb-4">Day</th>
            <th className="pb-4">Uncapped</th>
            <th className="pb-4">No Leads Allowed</th>
            <th className="pb-4">CVRS</th>
            <th className="pb-4">Revenue</th>
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
                  defaultValue={false}
                  render={({ field: { value, onChange } }) => (
                    <Switch checked={value} onCheckedChange={onChange} />
                  )}
                />
              </td>
              <td className="py-4">
                <Controller
                  name={`daily_cap.days.${day}.no_leads_allowed`}
                  control={control}
                  defaultValue={false}
                  render={({ field: { value, onChange } }) => (
                    <Switch checked={value} onCheckedChange={onChange} />
                  )}
                />
              </td>
              <td className="py-4">
                <Controller
                  name={`daily_cap.days.${day}.amount`}
                  control={control}
                  defaultValue={0}
                  render={({ field }) => (
                    <div className="flex items-center gap-2">
                      <Input
                        {...field}
                        type="number"
                        className="w-24"
                        value={field.value || 0}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        min={0}
                      />
                      <span className="text-sm text-muted-foreground">CVRS</span>
                    </div>
                  )}
                />
              </td>
              <td className="py-4">
                <Controller
                  name={`daily_cap.days.${day}.revenue`}
                  control={control}
                  defaultValue={0}
                  render={({ field }) => (
                    <div className="flex items-center gap-2">
                      <Input
                        {...field}
                        type="number"
                        className="w-24"
                        value={field.value || 0}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        min={0}
                        step="0.01"
                      />
                      <span className="text-sm text-muted-foreground">USD</span>
                    </div>
                  )}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6">
        <Controller
          name="daily_cap.percentage_alert"
          control={control}
          defaultValue={80}
          render={({ field }) => (
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Alert Percentage:</span>
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