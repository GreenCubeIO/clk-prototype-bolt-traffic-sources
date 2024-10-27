"use client";

import { useForm, FormProvider, useFormState } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { IOffer } from "@/lib/types/offer";
import { OfferSchemaJoi } from "@/lib/validation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BasicInfoForm } from "./sections/BasicInfoForm";
import { LeadActionForm } from "./sections/LeadActionForm";
import { PayoutCapsForm } from "./sections/PayoutCapsForm";
import { DisclaimerForm } from "./sections/DisclaimerForm";
import { OfferContentForm } from "./sections/OfferContentForm";
import { cn } from "@/lib/utils";

interface OfferFormProps {
  initialData: IOffer;
  onCancel: () => void;
}

function ErrorIndicator() {
  return <AlertCircle className="w-4 h-4 text-destructive inline-block ml-2" />;
}

function TabErrorWrapper({ errors, fields, children }: { 
  errors: Record<string, any>;
  fields: string[];
  children: React.ReactNode;
}) {
  const hasError = fields.some(field => {
    const fieldParts = field.split('.');
    let current = errors;
    for (const part of fieldParts) {
      if (!current[part]) return false;
      current = current[part];
    }
    return true;
  });

  return (
    <div className="flex items-center">
      {children}
      {hasError && <ErrorIndicator />}
    </div>
  );
}

export function OfferForm({ initialData, onCancel }: OfferFormProps) {
  const methods = useForm<IOffer>({
    defaultValues: initialData,
    resolver: joiResolver(OfferSchemaJoi),
    mode: "onChange"
  });

  const { handleSubmit, formState: { isSubmitting, errors } } = methods;

  const onSubmit = async (data: IOffer) => {
    try {

      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Form data:", data);
      toast.success("Offer updated successfully");
      onCancel();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to update offer");
    }
  };

  const basicInfoFields = ['name', 'status', 'time_zone_name', 'income_type', 'category'];
  const leadActionFields = ['lead_action_goal', 'url', 'fire_traffic_souce_pixel', 'allow_zero_amount_pixel_firing'];
  const payoutCapsFields = ['payout', 'daily_cap'];
  const disclaimerFields = ['disclaimer'];
  const contentFields = ['content'];

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="p-6">
          <div className="space-y-6">
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="basic">
                  <TabErrorWrapper errors={errors} fields={basicInfoFields}>
                    Basic Info
                  </TabErrorWrapper>
                </TabsTrigger>
                <TabsTrigger value="lead-action">
                  <TabErrorWrapper errors={errors} fields={leadActionFields}>
                    Lead Action
                  </TabErrorWrapper>
                </TabsTrigger>
                <TabsTrigger value="payout-caps">
                  <TabErrorWrapper errors={errors} fields={payoutCapsFields}>
                    Payout & Caps
                  </TabErrorWrapper>
                </TabsTrigger>
                <TabsTrigger value="disclaimer">
                  <TabErrorWrapper errors={errors} fields={disclaimerFields}>
                    Disclaimer
                  </TabErrorWrapper>
                </TabsTrigger>
                <TabsTrigger value="content">
                  <TabErrorWrapper errors={errors} fields={contentFields}>
                    Content
                  </TabErrorWrapper>
                </TabsTrigger>
              </TabsList>

              <div className="mt-6">
                <TabsContent value="basic">
                  <BasicInfoForm />
                </TabsContent>
                <TabsContent value="lead-action">
                  <LeadActionForm />
                </TabsContent>
                <TabsContent value="payout-caps">
                  <PayoutCapsForm />
                </TabsContent>
                <TabsContent value="disclaimer">
                  <DisclaimerForm />
                </TabsContent>
                <TabsContent value="content">
                  <OfferContentForm />
                </TabsContent>
              </div>
            </Tabs>

            <div className="flex justify-end space-x-4 pt-6">
              <Button 
                variant="outline"
                onClick={onCancel}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  'Save Changes'
                )}
              </Button>
            </div>
          </div>
        </Card>
      </form>
    </FormProvider>
  );
}