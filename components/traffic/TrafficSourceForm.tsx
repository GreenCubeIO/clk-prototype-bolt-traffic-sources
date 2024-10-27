"use client";

import { useForm, FormProvider } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { ITrafficSource } from "@/lib/types/traffic";
import { TrafficSourceSchema } from "@/lib/validation/traffic-source";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BasicInfoForm } from "./sections/BasicInfoForm";
import { ApiConfigForm } from "./sections/ApiConfigForm";
import { EventsForm } from "./sections/EventsForm";
import { AdSettingsForm } from "./sections/AdSettingsForm";
import { TokensForm } from "./sections/TokensForm";
import { AccountsForm } from "./sections/AccountsForm";

interface TrafficSourceFormProps {
  initialData: ITrafficSource;
  onCancel: () => void;
}

export function TrafficSourceForm({ initialData, onCancel }: TrafficSourceFormProps) {
  const methods = useForm<ITrafficSource>({
    defaultValues: {
      ...initialData,
      api_credentials: {
        ...initialData.api_credentials,
        oauth: initialData.api_credentials?.oauth || {}
      }
    },
    resolver: joiResolver(TrafficSourceSchema)
  });

  const { handleSubmit, formState: { isSubmitting } } = methods;

  const onSubmit = async (data: ITrafficSource) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Form data:", data);
      toast.success("Traffic source updated successfully");
      onCancel();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to update traffic source");
    }
  };

  return (
    <div className="p-6">
      <Button
        variant="ghost"
        size="sm"
        className="mb-6"
        onClick={onCancel}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Traffic Sources
      </Button>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card className="p-6">
            <div className="space-y-6">
              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid w-full grid-cols-6">
                  <TabsTrigger value="basic">Basic Info</TabsTrigger>
                  <TabsTrigger value="api">API Config</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                  <TabsTrigger value="ads">Ad Settings</TabsTrigger>
                  <TabsTrigger value="tokens">Tokens</TabsTrigger>
                  <TabsTrigger value="accounts">Accounts</TabsTrigger>
                </TabsList>

                <div className="mt-6">
                  <TabsContent value="basic">
                    <BasicInfoForm />
                  </TabsContent>
                  <TabsContent value="api">
                    <ApiConfigForm />
                  </TabsContent>
                  <TabsContent value="events">
                    <EventsForm />
                  </TabsContent>
                  <TabsContent value="ads">
                    <AdSettingsForm />
                  </TabsContent>
                  <TabsContent value="tokens">
                    <TokensForm />
                  </TabsContent>
                  <TabsContent value="accounts">
                    <AccountsForm />
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
    </div>
  );
}