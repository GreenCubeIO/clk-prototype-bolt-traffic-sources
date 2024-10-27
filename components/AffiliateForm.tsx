"use client";

import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { IAffiliate } from '@/lib/types';
import { useAffiliateStore } from '@/store/affiliate';
import { AffiliateSchemaJoi } from '@/lib/validation';
import { TIME_ZONES, AFFILIATE_NETWORKS } from '@/lib/constants';
import { Globe2, Mail, User, Key, Link2, Loader2 } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { FloatingLabelInput } from '@/components/ui/floating-label-input';
import { FloatingLabelSelect } from '@/components/ui/floating-label-select';
import { Switch } from '@/components/ui/switch';

export function AffiliateForm() {
  const { affiliate, updateAffiliate } = useAffiliateStore();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<IAffiliate>({
    defaultValues: affiliate,
    resolver: joiResolver(AffiliateSchemaJoi)
  });

  const apiEnabled = watch('api_configuration.enabled');

  const onSubmit = async (data: IAffiliate) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const formattedData = {
        ...data,
        created_on: new Date(data.created_on).toISOString(),
        updated_on: new Date().toISOString(),
        group: {
          ...affiliate.group,
          updated_on: new Date(affiliate.group.updated_on).toISOString(),
          created_on: new Date(affiliate.group.created_on).toISOString(),
        },
      };

      updateAffiliate(formattedData);
      toast.success('Affiliate network updated successfully');
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to update affiliate network');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
      <Card className="p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-6">Edit Affiliate Network</h2>

            {/* Basic Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Basic Information</h3>
              
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <FloatingLabelInput
                    {...field}
                    label="Network Name"
                    error={errors.name?.message}
                  />
                )}
              />

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-muted-foreground">Active Status</span>
                  <Controller
                    name="status"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <div className="flex items-center space-x-2">
                        <Switch
                          checked={value === 'active'}
                          onCheckedChange={(checked) => onChange(checked ? 'active' : 'inactive')}
                        />
                        <span>{value === 'active' ? 'Active' : 'Inactive'}</span>
                      </div>
                    )}
                  />
                </div>

                <Controller
                  name="time_zone_name"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <FloatingLabelSelect
                      label="Time Zone"
                      value={value}
                      onValueChange={onChange}
                      error={errors.time_zone_name?.message}
                      options={TIME_ZONES.map(zone => ({ label: zone, value: zone }))}
                    />
                  )}
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 mt-8">
              <h3 className="text-lg font-semibold">Contact Information</h3>
              
              <Controller
                name="contact.name"
                control={control}
                render={({ field }) => (
                  <FloatingLabelInput
                    {...field}
                    label="Contact Name"
                    startIcon={<User className="w-4 h-4" />}
                    error={errors.contact?.name?.message}
                  />
                )}
              />

              <Controller
                name="contact.email"
                control={control}
                render={({ field }) => (
                  <FloatingLabelInput
                    {...field}
                    type="email"
                    label="Email Address"
                    startIcon={<Mail className="w-4 h-4" />}
                    error={errors.contact?.email?.message}
                  />
                )}
              />

              <Controller
                name="contact.url"
                control={control}
                render={({ field }) => (
                  <FloatingLabelInput
                    {...field}
                    type="url"
                    label="Website URL"
                    startIcon={<Globe2 className="w-4 h-4" />}
                    error={errors.contact?.url?.message}
                  />
                )}
              />
            </div>

            {/* API Configuration */}
            <div className="space-y-6 mt-8">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">API Configuration</h3>
                <Controller
                  name="api_configuration.enabled"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={value}
                        onCheckedChange={onChange}
                      />
                      <span>Enable API</span>
                    </div>
                  )}
                />
              </div>
              
              {apiEnabled && (
                <div className="space-y-6 mt-4">
                  <Controller
                    name="api_configuration.platform"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <FloatingLabelSelect
                        label="Platform"
                        value={value}
                        onValueChange={onChange}
                        error={errors.api_configuration?.platform?.message}
                        options={Object.values(AFFILIATE_NETWORKS).map(network => ({
                          label: network,
                          value: network
                        }))}
                      />
                    )}
                  />

                  <Controller
                    name="api_configuration.affiliate_id"
                    control={control}
                    render={({ field }) => (
                      <FloatingLabelInput
                        {...field}
                        label="Affiliate ID"
                        startIcon={<User className="w-4 h-4" />}
                        error={errors.api_configuration?.affiliate_id?.message}
                      />
                    )}
                  />

                  <Controller
                    name="api_configuration.api_key"
                    control={control}
                    render={({ field }) => (
                      <FloatingLabelInput
                        {...field}
                        type="password"
                        label="API Key"
                        startIcon={<Key className="w-4 h-4" />}
                        error={errors.api_configuration?.api_key?.message}
                      />
                    )}
                  />

                  <Controller
                    name="api_configuration.api_url"
                    control={control}
                    render={({ field }) => (
                      <FloatingLabelInput
                        {...field}
                        label="API URL"
                        startIcon={<Link2 className="w-4 h-4" />}
                        error={errors.api_configuration?.api_url?.message}
                      />
                    )}
                  />
                </div>
              )}
            </div>

            <div className="flex justify-end space-x-4 pt-6">
              <Button 
                variant="outline"
                onClick={() => window.history.back()}
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
        </div>
      </Card>
    </form>
  );
}