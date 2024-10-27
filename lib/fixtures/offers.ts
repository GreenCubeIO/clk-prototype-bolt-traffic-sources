import { IOffer } from '@/lib/types/offer';

export const OfferFixture: IOffer = {
  _id: '61d34a66738eac52898240e5',
  daily_cap: {
    days: {
      monday: {
        no_leads_allowed: false,
        uncapped: false,
        amount: 500,
      },
      tuesday: {
        no_leads_allowed: false,
        uncapped: false,
        amount: 500,
      },
      wednesday: {
        no_leads_allowed: false,
        uncapped: false,
        amount: 500,
      },
      thursday: {
        no_leads_allowed: false,
        uncapped: false,
        amount: 500,
      },
      friday: {
        no_leads_allowed: false,
        uncapped: false,
        amount: 500,
      },
      saturday: {
        no_leads_allowed: false,
        uncapped: false,
        amount: 500,
      },
      sunday: {
        no_leads_allowed: false,
        uncapped: false,
        amount: 500,
      },
    },
    cap_type: 'daily_cap',
    warned: false,
    alerted: false,
    percentage_alert: 80,
    notifyTo: [{
        "_id": "6000ccc1761f1000100c7fb3",
        "firstName": "Allan",
        "lastName": "Naranjo"
    }],
  },
  status: 'active',
  media: [],
  groups: [],
  tokens: [
    {
      selected: true,
      attribute_to_pass: 'sid3',
      attribute: 'interaction_id',
      name: 'Interaction ID',
    },
    {
      selected: true,
      attribute_to_pass: 'sid1',
      attribute: 'traffic_source_id',
      name: 'Traffic Source ID',
    },
    {
      selected: true,
      attribute_to_pass: 'sid2',
      attribute: 'offer_id',
      name: 'Offer ID',
    },
    {
      name: 'Region Code',
      attribute: 'region_code',
      attribute_to_pass: '',
      selected: false,
    },
  ],
  notes: [],
  income_type: 'main',
  lead_action_goal: 'REDIRECT',
  fire_traffic_souce_pixel: true,
  allow_zero_amount_pixel_firing: true,
  time_zone_name: 'EST5EDT',
  content: {
    url: 'eCoverage.com',
    name: 'eCoverage™',
  },
  name: 'eCoverage - Life Insurance - Mon - Fri 9am - 9pm EST - W4',
  category: {
    _id: '5bfd8796d9096003d40332e2',
    name: 'Life Insurance - US',
    created_on: '2019-04-30T18:14:03.298Z',
    updated_on: '2019-04-30T18:14:03.298Z',
  },
  affiliate: {
    _id: '578152ba87a501fc17ef9d51',
  },
  url: 'http://dealstimeplus.com/ae3fc8676223b0d2865c989a47f6fecca/?',
  payout: 13,
  disclaimer: '<p style="text-align: right;"><em>Advertorial</em></p>',
  updated_on: '2019-04-30T18:14:03.298Z',
  created_on: '2019-04-30T18:14:03.298Z',
};