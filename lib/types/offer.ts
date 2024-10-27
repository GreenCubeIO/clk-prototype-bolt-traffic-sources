export interface IOfferCategory {
  _id: string;
  name: string;
  created_on: string;
  updated_on: string;
}

export interface IOfferDailyCap {
  warned?: boolean;
  alerted?: boolean;
  percentage_alert: number;
  notifyTo:
    | string[]
    | {
        _id: string;
        firstName: string;
        lastName: string;
      }[];
  cap_type?: 'daily_cap' | 'cap_by_day' | 'uncapped';
  cvrs?: number;
  revenue?: number;
  days?: {
    [key: string]: {
      amount: number;
      uncapped: boolean;
      no_leads_allowed: boolean;
    };
  };
}

export interface IOffer {
  _id: string;
  name: string;
  created_on: string;
  updated_on: string;
  media: Array<{
    name: string;
    url: string;
    type: string;
  }>;
  category: IOfferCategory;
  notes: Array<{
    class: 'warning' | 'danger' | 'information' | 'success';
    content: string;
  }>;
  income_type: 'main' | 'secondary';
  lead_action_goal: 'CALL' | 'REDIRECT';
  fire_traffic_souce_pixel: boolean;
  allow_zero_amount_pixel_firing: boolean;
  affiliate: {
    _id: string;
  };
  status: 'active' | 'inactive';
  url: string;
  groups: any[];
  tokens: Array<{
    attribute: string;
    attribute_to_pass: string;
    name: string;
    selected: boolean;
  }>;
  payout: number;
  daily_cap: IOfferDailyCap;
  time_zone_name: string;
  disclaimer: string;
  content: {
    name: string;
    url: string;
  };
}
