import React, { forwardRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface FloatingLabelSelectProps {
  label: string;
  options: { label: string; value: string; disabled?: boolean }[];
  value?: string;
  onValueChange: (value: string) => void;
  error?: string;
  startIcon?: React.ReactNode;
  disabled?: boolean;
}

export const FloatingLabelSelect = forwardRef<HTMLButtonElement, FloatingLabelSelectProps>(
  ({ label, options, value, onValueChange, error, startIcon, disabled }, ref) => {
    return (
      <div className="relative">
        <Select value={value} onValueChange={onValueChange} disabled={disabled}>
          <SelectTrigger
            ref={ref}
            className={cn(
              "w-full px-3 py-2 text-base border rounded-md bg-background",
              "focus:outline-none focus:ring-2 focus:ring-ring focus:border-input",
              error && "border-destructive focus:ring-destructive",
              startIcon && "pl-9"
            )}
          >
            <SelectValue placeholder={label} />
            {startIcon && (
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                {startIcon}
              </span>
            )}
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {error && (
          <span className="text-sm text-destructive mt-1 absolute -bottom-6 left-0">
            {error}
          </span>
        )}
      </div>
    );
  }
);