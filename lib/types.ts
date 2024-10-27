export type Status = 'active' | 'inactive' | 'pending';

export interface IGroup {
  _id: string;
  name: string;
  updated_on: string;
  created_on: string;
}

export interface IAffiliate {
  _id?: string;
  created_on: string;
  updated_on: string;
  name: string;
  group: IGroup & { object_name: 'affiliate' };
  contact: {
    name: string;
    email: string;
    url: string;
  };
  campaigns: any[];
  api_configuration: {
    enabled: boolean;
    platform?: string;
    affiliate_id?: string;
    api_key?: string;
    api_url?: string;
  };
  status: `${Status}`;
  time_zone_name: string;
}