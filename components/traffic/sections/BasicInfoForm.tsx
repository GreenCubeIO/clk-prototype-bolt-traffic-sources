"use client";

import { useFormContext, Controller } from "react-hook-form";
import { ITrafficSource } from "@/lib/types/traffic";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { FloatingLabelSelect } from "@/components/ui/floating-label-select";
import { Switch } from "@/components/ui/switch";
import { TIME_ZONES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import Image from "next/image";

export function BasicInfoForm() {
  const { control, watch } = useFormContext<ITrafficSource>();
  const logoUrl = watch("logo");

  const handleLogoUpload = () => {
    // In a real implementation, this would trigger a file upload
    // For now, we'll just show an alert
    alert("File upload functionality would be implemented here");
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Basic Information</h3>
      
      <div className="flex items-center gap-4">
        {logoUrl ? (
          <div className="relative w-[50px] h-[50px] rounded-lg border overflow-hidden">
            <Image
              src={logoUrl}
              alt="Traffic Source Logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
        ) : (
          <div className="w-[50px] h-[50px] rounded-lg border bg-muted flex items-center justify-center">
            <Upload className="w-5 h-5 text-muted-foreground" />
          </div>
        )}
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={handleLogoUpload}
        >
          <Upload className="w-4 h-4 mr-2" />
          Upload Logo
        </Button>
      </div>

      <Controller
        name="name"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <FloatingLabelInput
            {...field}
            label="Traffic Source Name"
            error={error?.message}
          />
        )}
      />

      <div className="grid grid-cols-2 gap-4">
        <Controller
          name="nickname"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FloatingLabelInput
              {...field}
              label="Nickname"
              error={error?.message}
            />
          )}
        />

        <Controller
          name="shortname"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FloatingLabelInput
              {...field}
              label="Short Name"
              error={error?.message}
            />
          )}
        />
      </div>

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
              options={TIME_ZONES.map(zone => ({ label: zone, value: zone }))}
            />
          )}
        />
      </div>

      <Controller
        name="logo"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <FloatingLabelInput
            {...field}
            label="Logo URL"
            type="url"
            error={error?.message}
            className="hidden" // Hide the URL input but keep it in the form
          />
        )}
      />
    </div>
  );
}