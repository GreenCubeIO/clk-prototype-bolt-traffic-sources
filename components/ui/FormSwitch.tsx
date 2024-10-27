"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface FormSwitchProps {
  children?: React.ReactNode;
  isSelected?: boolean;
  onValueChange?: (checked: boolean) => void;
  error?: string;
  hasError?: boolean;
}

export function FormSwitch({
  children,
  isSelected,
  onValueChange,
  error,
  hasError,
}: FormSwitchProps) {
  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="switch"
        checked={isSelected}
        onCheckedChange={onValueChange}
        className={hasError ? "border-red-500" : ""}
      />
      <Label htmlFor="switch" className="text-sm">
        {children}
      </Label>
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}