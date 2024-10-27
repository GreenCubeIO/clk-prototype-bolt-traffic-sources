import { IAffiliate } from '../types';

export const mockAffiliates: IAffiliate[] = [
  {
    _id: '61bc1b674fe9f538aa32de58',
    api_configuration: {
      enabled: false,
    },
    campaigns: [],
    status: 'active',
    time_zone_name: 'EST5EDT',
    name: 'Successful Media',
    group: {
      _id: '575f0d9877c7a04d47b669f3',
      object_name: 'affiliate',
      name: 'Monthly',
      updated_on: '2016-06-13T19:46:32.033Z',
      created_on: '2016-06-13T19:46:32.033Z',
    },
    contact: {
      name: '',
      email: '',
      url: '',
    },
    created_on: '2021-12-17T05:08:55.849Z',
    updated_on: '2021-12-17T05:08:55.849Z',
  },
  {
    _id: '61bc1b674fe9f538aa32de59',
    api_configuration: {
      enabled: true,
      platform: 'CAKE',
    },
    campaigns: [{ id: 1 }, { id: 2 }],
    status: 'active',
    time_zone_name: 'UTC',
    name: 'Digital Ventures',
    group: {
      _id: '575f0d9877c7a04d47b669f4',
      object_name: 'affiliate',
      name: 'Premium',
      updated_on: '2016-06-13T19:46:32.033Z',
      created_on: '2016-06-13T19:46:32.033Z',
    },
    contact: {
      name: 'John Doe',
      email: 'john@digitalventures.com',
      url: 'https://digitalventures.com',
    },
    created_on: '2021-12-17T05:08:55.849Z',
    updated_on: '2021-12-17T05:08:55.849Z',
  },
  {
    _id: '61bc1b674fe9f538aa32de60',
    api_configuration: {
      enabled: false,
    },
    campaigns: [],
    status: 'inactive',
    time_zone_name: 'PST8PDT',
    name: 'Global Marketing Solutions',
    group: {
      _id: '575f0d9877c7a04d47b669f5',
      object_name: 'affiliate',
      name: 'Standard',
      updated_on: '2016-06-13T19:46:32.033Z',
      created_on: '2016-06-13T19:46:32.033Z',
    },
    contact: {
      name: 'Jane Smith',
      email: 'jane@globalmarketing.com',
      url: 'https://globalmarketing.com',
    },
    created_on: '2021-12-17T05:08:55.849Z',
    updated_on: '2021-12-17T05:08:55.849Z',
  }
];