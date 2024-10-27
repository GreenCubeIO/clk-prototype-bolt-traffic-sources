"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  startIcon?: React.ReactNode;
}

export const FloatingLabelInput = forwardRef<HTMLInputElement, FloatingLabelInputProps>(
  ({ className, label, error, startIcon, type, ...props }, ref) => {
    return (
      <div className="relative">
        <div className="relative">
          {startIcon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
              {startIcon}
            </div>
          )}
          <Input
            type={type}
            className={cn(
              "h-14 px-4 pt-4",
              startIcon && "pl-10",
              error && "border-destructive",
              className
            )}
            ref={ref}
            {...props}
            value={props.value ?? ''}
          />
          <Label
            className={cn(
              "absolute left-4 top-1 text-xs text-muted-foreground transition-all",
              startIcon && "left-10"
            )}
          >
            {label}
          </Label>
        </div>
        {error && (
          <span className="text-xs text-destructive mt-1">{error}</span>
        )}
      </div>
    );
  }
);

FloatingLabelInput.displayName = "FloatingLabelInput";