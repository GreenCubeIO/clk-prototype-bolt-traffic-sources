"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { ITrafficSource, IToken } from "@/lib/types/traffic";
import { Button } from "@/components/ui/button";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { Switch } from "@/components/ui/switch";
import { Plus, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export function TokensForm() {
  const { control } = useFormContext<ITrafficSource>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tokens"
  });

  const addToken = () => {
    append({
      name: "",
      macro: "",
      aliases: [],
      tokenRules: [],
      selectedRules: [],
      available_for_automation: false,
      available_for_cpc_update: false,
      allowed_in_adsbuilder: false
    } as IToken);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Tokens Configuration</h3>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={addToken}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Token
        </Button>
      </div>

      <div className="space-y-4">
        {fields.map((field, index) => (
          <Card key={field.id} className="p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <FloatingLabelInput
                  {...control.register(`tokens.${index}.name`)}
                  label="Token Name"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => remove(index)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FloatingLabelInput
                  {...control.register(`tokens.${index}.macro`)}
                  label="Macro"
                />
                <FloatingLabelInput
                  {...control.register(`tokens.${index}.parameter`)}
                  label="Parameter"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <span className="text-sm text-muted-foreground">Available for CPC Update</span>
                  <Switch
                    {...control.register(`tokens.${index}.available_for_cpc_update`)}
                  />
                </div>

                <div className="space-y-2">
                  <span className="text-sm text-muted-foreground">Available for Automation</span>
                  <Switch
                    {...control.register(`tokens.${index}.available_for_automation`)}
                  />
                </div>

                <div className="space-y-2">
                  <span className="text-sm text-muted-foreground">Allowed in Ads Builder</span>
                  <Switch
                    {...control.register(`tokens.${index}.allowed_in_adsbuilder`)}
                  />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}