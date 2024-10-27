export interface INote {
  text: string;
  created_on?: string;
  updated_on?: string;
}

export interface IGroup {
  _id: string;
  name: string;
  updated_on: string;
  created_on: string;
}

export interface IEvent {
  _id: string;
  name: string;
  created_on: string;
  updated_on: string;
}

export interface ITrafficSourceToken {
  _id: string;
  name: string;
  macro: string;
  placeholder: string;
  parameter: string;
  type: string;
  created_on: string;
  updated_on: string;
  aliases: string[];
  tokenRules: {
    find_this: string;
    name: string;
    replace_with: string;
    value: string;
  }[];
}

export interface IAdSettings {
  _id: string;
  name: string;
  allows_images: boolean;
  round_robin: boolean;
  selected: boolean;
  display_name: {
    enabled: boolean;
    max_length: number;
  };
  display_url: {
    enabled: boolean;
    max_length: number;
  };
  call_to_action: {
    enabled: boolean;
  };
  description: {
    enabled: boolean;
    max_length: number;
  };
  headline: {
    enabled: boolean;
    max_length: number;
  };
  sub_headline: {
    enabled: boolean;
    max_length: number;
  };
  adi: {
    dimensions: {
      width: number;
      height: number;
    };
    enabled: boolean;
  };
  secondary_adi: {
    dimensions: {
      width: number;
      height: number;
    };
    enabled: boolean;
  };
  thumbnail_adi: {
    dimensions: {
      width: number;
      height: number;
    };
    enabled: boolean;
  };
}

export interface IApiFunctionality {
  campaigns: {
    create: {
      end_point: string;
      method: string;
      active: boolean;
    };
    update: {
      end_point: string;
      method: string;
      active: boolean;
    };
    list: {
      end_point: string;
      method: string;
      active: boolean;
    };
    cpc: {
      active: boolean;
      placements_available: boolean;
      bid_available: boolean;
    };
  };
  ads: {
    create: {
      end_point: string;
      method: string;
      active: boolean;
    };
    update: {
      end_point: string;
      method: string;
      active: boolean;
    };
    list: {
      end_point: string;
      method: string;
      active: boolean;
    };
  };
  conversions: {
    pixel_firing: boolean;
    action: string;
  };
}

export type TStatusTypes = 'active' | 'inactive' | 'pending';
export type DynamicTokenData = Record<string, string>;

export interface ITrafficSource {
  _id: string;
  api_functionality: IApiFunctionality;
  logo: string;
  api?: { name: string };
  api_credentials: {
    authentication_method?: 'oauth' | 'oauth_refresh' | 'basic' | 'bypass';
    authentication_request_method?: 'get' | 'post' | 'put';
    should_save_token?: boolean;
    token_expiration_days?: number;
    last_time_updated?: string;
    access_token?: string;
    oauth: {
      enabled?: boolean;
      account_name?: string;
      end_point?: string;
      grant_type?: string;
      client_id?: string;
      secret?: string;
      refresh_token?: string;
      code?: string;
      developer_token?: string;
      customer_account_id?: string;
      mediaGoApiToken?: string;
      client_secret?: string;
    };
  };
  crawlers_bots: {
    ip_addresses: never[];
    user_agents: never[];
  };
  dynamic_token_data: DynamicTokenData;
  data: {
    reports: any[];
  };
  last_conversions_date_time?: string | null;
  tokens: ITrafficSourceToken[];
  disclaimers?: any[];
  status?: TStatusTypes;
  ad_settings: IAdSettings[];
  remote_campaigns?: any[];
  url_rule_append: string;
  accounts: any[];
  notes: INote[];
  time_zone_name?: string;
  group?: IGroup & { object_name: 'traffic-source' };
  postback_pixel: {
    value: string;
    type?: 'url' | 'raw_code';
  };
  name: string;
  nickname: string;
  shortname: string;
  created_on?: string;
  updated_on?: string;
  last_time_cost_update?: Date;
  next_consecutive_campaign_number?: number;
  lastSynced?: Date | string;
  events?: string[] | IEvent[];
}