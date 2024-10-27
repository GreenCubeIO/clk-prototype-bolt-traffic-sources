"use client";

import { useFormContext, Controller } from "react-hook-form";
import { ITrafficSource } from "@/lib/types/traffic";
import { FloatingLabelInput } from "@/components/ui/floating-label-input";
import { FloatingLabelSelect } from "@/components/ui/floating-label-select";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";

export function ApiConfigForm() {
  const { control, watch } = useFormContext<ITrafficSource>();
  const authMethod = watch("api_credentials.authentication_method");

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">API Configuration</h3>

      <Card className="p-4">
        <div className="space-y-4">
          <Controller
            name="api_credentials.authentication_method"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <FloatingLabelSelect
                label="Authentication Method"
                value={value}
                onValueChange={onChange}
                error={error?.message}
                options={[
                  { label: "OAuth", value: "oauth" },
                  { label: "OAuth Refresh", value: "oauth_refresh" },
                  { label: "Basic", value: "basic" },
                  { label: "Bypass", value: "bypass" },
                ]}
              />
            )}
          />

          <Controller
            name="api_credentials.authentication_request_method"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <FloatingLabelSelect
                label="Request Method"
                value={value}
                onValueChange={onChange}
                error={error?.message}
                options={[
                  { label: "GET", value: "get" },
                  { label: "POST", value: "post" },
                  { label: "PUT", value: "put" },
                ]}
              />
            )}
          />

          {authMethod === "oauth" && (
            <div className="space-y-4">
              <Controller
                name="api_credentials.oauth.client_id"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <FloatingLabelInput
                    {...field}
                    label="Client ID"
                    error={error?.message}
                  />
                )}
              />

              <Controller
                name="api_credentials.oauth.client_secret"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <FloatingLabelInput
                    {...field}
                    label="Client Secret"
                    type="password"
                    error={error?.message}
                  />
                )}
              />

              <Controller
                name="api_credentials.oauth.end_point"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <FloatingLabelInput
                    {...field}
                    label="OAuth Endpoint"
                    type="url"
                    error={error?.message}
                  />
                )}
              />
            </div>
          )}

          <div className="flex items-center justify-between pt-4">
            <div>
              <h4 className="font-medium">Save Token</h4>
              <p className="text-sm text-muted-foreground">Store authentication token for future use</p>
            </div>
            <Controller
              name="api_credentials.should_save_token"
              control={control}
              render={({ field: { value, onChange } }) => (
                <Switch
                  checked={value}
                  onCheckedChange={onChange}
                />
              )}
            />
          </div>

          {watch("api_credentials.should_save_token") && (
            <Controller
              name="api_credentials.token_expiration_days"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <FloatingLabelInput
                  {...field}
                  type="number"
                  label="Token Expiration (days)"
                  error={error?.message}
                />
              )}
            />
          )}
        </div>
      </Card>

      <Card className="p-4">
        <h4 className="font-medium mb-4">API Functionality</h4>
        
        <div className="space-y-6">
          <div className="space-y-4">
            <h5 className="text-sm font-medium">Campaigns</h5>
            
            <div className="grid grid-cols-2 gap-4">
              <Controller
                name="api_functionality.campaigns.create.active"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Create Campaign</span>
                    <Switch
                      checked={value}
                      onCheckedChange={onChange}
                    />
                  </div>
                )}
              />

              <Controller
                name="api_functionality.campaigns.update.active"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Update Campaign</span>
                    <Switch
                      checked={value}
                      onCheckedChange={onChange}
                    />
                  </div>
                )}
              />
            </div>

            <Controller
              name="api_functionality.campaigns.cpc.active"
              control={control}
              render={({ field: { value, onChange } }) => (
                <div className="flex items-center justify-between">
                  <span className="text-sm">CPC Management</span>
                  <Switch
                    checked={value}
                    onCheckedChange={onChange}
                  />
                </div>
              )}
            />
          </div>

          <div className="space-y-4">
            <h5 className="text-sm font-medium">Ads</h5>
            
            <div className="grid grid-cols-2 gap-4">
              <Controller
                name="api_functionality.ads.create.active"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Create Ads</span>
                    <Switch
                      checked={value}
                      onCheckedChange={onChange}
                    />
                  </div>
                )}
              />

              <Controller
                name="api_functionality.ads.update.active"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Update Ads</span>
                    <Switch
                      checked={value}
                      onCheckedChange={onChange}
                    />
                  </div>
                )}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h5 className="text-sm font-medium">Conversions</h5>
            
            <Controller
              name="api_functionality.conversions.pixel_firing"
              control={control}
              render={({ field: { value, onChange } }) => (
                <div className="flex items-center justify-between">
                  <span className="text-sm">Pixel Firing</span>
                  <Switch
                    checked={value}
                    onCheckedChange={onChange}
                  />
                </div>
              )}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}