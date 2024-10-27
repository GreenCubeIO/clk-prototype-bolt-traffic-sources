"use client";

import { Control, Controller } from 'react-hook-form';
import { IOffer } from '@/lib/types/offer';
import { FloatingLabelInput } from '@/components/ui/floating-label-input';

interface CategoryFormProps {
  control: Control<IOffer>;
  errors: any;
}

export function CategoryForm({ control, errors }: CategoryFormProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Category Information</h3>
      
      <Controller
        name="category.name"
        control={control}
        render={({ field }) => (
          <FloatingLabelInput
            {...field}
            label="Category Name"
            error={errors.category?.name?.message}
          />
        )}
      />
    </div>
  );
}