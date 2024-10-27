export interface IGroup {
  _id: string;
  name: string;
  object_name: 'affiliate';
  updated_on: string;
  created_on: string;
}

export interface IContact {
  name: string;
  email: string;
  url: string;
}

export interface IApiConfiguration {
  enabled: boolean;
  platform?: string;
  affiliate_id?: string;
  api_key?: string;
  api_url?: string;
}

export type TStatusTypes = 'active' | 'inactive' | 'pending';

export interface IAffiliate {
  _id: string;
  api_configuration: IApiConfiguration;
  campaigns: any[];
  status: TStatusTypes;
  time_zone_name: string;
  name: string;
  group: IGroup;
  contact: IContact;
  created_on: string;
  updated_on: string;
}