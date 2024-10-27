"use client";

import { useState } from "react";
import { Controller } from "react-hook-form";
import { Label } from "@/components/ui/label";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ChevronsUpDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface MediaBuyer {
  _id: string;
  firstName: string;
  lastName: string;
}

const MEDIA_BUYERS = [
  { _id: "6000ccc1761f1000100c7fb3", firstName: "Allan", lastName: "Naranjo" },
  { _id: "6000ccc1761f1000100c7fb4", firstName: "John", lastName: "Smith" },
  { _id: "6000ccc1761f1000100c7fb5", firstName: "Sarah", lastName: "Johnson" },
  { _id: "6000ccc1761f1000100c7fb6", firstName: "Mike", lastName: "Williams" },
  { _id: "6000ccc1761f1000100c7fb7", firstName: "Emily", lastName: "Brown" },
];

interface MediaBuyerSelectProps {
  control: any;
}

export function MediaBuyerSelect({ control }: MediaBuyerSelectProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-2">
      <Label>Media Buyers to Notify</Label>
      <Controller
        name="daily_cap.notifyTo"
        control={control}
        defaultValue={[]}
        render={({ field }) => {
          const selectedValues = Array.isArray(field.value) ? field.value : [];

          const getFullName = (buyer: MediaBuyer) => 
            `${buyer.firstName} ${buyer.lastName}`;

          return (
            <>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={cn(
                      "w-full justify-between",
                      !selectedValues.length && "text-muted-foreground"
                    )}
                  >
                    {selectedValues.length > 0
                      ? `${selectedValues.length} selected`
                      : "Select media buyers"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0" align="start">
                  <Command>
                    <CommandInput 
                      placeholder="Search media buyers..."
                      className="h-9"
                    />
                    <CommandEmpty>No media buyers found.</CommandEmpty>
                    <CommandGroup className="max-h-[200px] overflow-auto">
                      {MEDIA_BUYERS.map((buyer) => {
                        const isSelected = selectedValues.some(
                          (selected: MediaBuyer) => selected._id === buyer._id
                        );

                        return (
                          <CommandItem
                            key={buyer._id}
                            value={buyer._id}
                            onSelect={() => {
                              const newValue = isSelected
                                ? selectedValues.filter(
                                    (selected: MediaBuyer) => selected._id !== buyer._id
                                  )
                                : [...selectedValues, buyer];
                              field.onChange(newValue);
                              setOpen(true);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                isSelected ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {getFullName(buyer)}
                          </CommandItem>
                        );
                      })}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>

              <div className="flex flex-wrap gap-2 mt-2">
                {selectedValues.map((buyer: MediaBuyer) => (
                  <Badge
                    key={buyer._id}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {getFullName(buyer)}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={() => {
                        field.onChange(
                          selectedValues.filter(
                            (selected: MediaBuyer) => selected._id !== buyer._id
                          )
                        );
                      }}
                    />
                  </Badge>
                ))}
              </div>
            </>
          );
        }}
      />
    </div>
  );
}