"use client";

import { Control, Controller } from 'react-hook-form';
import { IOffer } from '@/lib/types/offer';
import { FloatingLabelInput } from '@/components/ui/floating-label-input';
import { Globe } from 'lucide-react';

interface ContentFormProps {
  control: Control<IOffer>;
  errors: any;
}

export function ContentForm({ control, errors }: ContentFormProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Offer Content</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <Controller
          name="content.name"
          control={control}
          render={({ field }) => (
            <FloatingLabelInput
              {...field}
              label="Content Name"
              error={errors.content?.name?.message}
            />
          )}
        />

        <Controller
          name="content.url"
          control={control}
          render={({ field }) => (
            <FloatingLabelInput
              {...field}
              label="Content URL"
              startIcon={<Globe className="w-4 h-4" />}
              error={errors.content?.url?.message}
            />
          )}
        />
      </div>

      <Controller
        name="url"
        control={control}
        render={({ field }) => (
          <FloatingLabelInput
            {...field}
            label="Tracking URL"
            startIcon={<Globe className="w-4 h-4" />}
            error={errors.url?.message}
          />
        )}
      />
    </div>
  );
}