import { ITrafficSource } from "@/lib/types/traffic";

export const mockTrafficSources: ITrafficSource[] = [
  {
    _id: "5e46d6787810b90011c91204",
    name: "Outbrain 2",
    nickname: "ts270",
    shortname: "oaa",
    logo: "https://assets.1010010010.com/editor_images/logos/img/202406160032549350_outbrainLogo.png",
    status: "active",
    api: {
      name: "OUTBRAIN",
    },
    api_functionality: {
      campaigns: {
        create: {
          method: "post",
          active: false,
          end_point: "http://google.com",
        },
        update: {
          method: "put",
          active: true,
          end_point: "https://api.outbrain.com/amplify/v0.1/campaigns/<%= campaign_id %>",
        },
        list: {
          method: "get",
          active: true,
          end_point: "https://api.outbrain.com/amplify/v0.1/marketers/<%= account_name %>/campaigns?includeArchived=true&extraFields=BidBySections,BlockedSites",
        },
        cpc: {
          active: true,
          placements_available: true,
          bid_available: true,
        },
      },
      ads: {
        create: {
          method: "post",
          active: true,
          end_point: "https://api.outbrain.com/amplify/v0.1/campaigns/<%= campaign_id %>/promotedLinks",
        },
        update: {
          method: "put",
          active: true,
          end_point: "https://api.outbrain.com/amplify/v0.1/campaigns/<%= campaign_id %>/promotedLinks",
        },
        list: {
          method: "get",
          active: true,
          end_point: "https://api.outbrain.com/amplify/v0.1/campaigns/<%= campaign_id %>/promotedLinks",
        },
      },
      conversions: {
        action: "",
        pixel_firing: true,
      },
    },
    api_credentials: {
      authentication_method: "basic",
      authentication_request_method: "get",
      should_save_token: true,
      token_expiration_days: 30,
      last_time_updated: "2024-09-29T00:02:11.392Z",
      access_token: "MTcyNzM4MDc2NDkxNzowMGI1MTI4MjY5ODVhYjU5YmQwZWYxNGNmMmQyZjA1MTg2ZjhiYjlmNGU1NmU4ZGVmOGUyOGY4MmZjYTZhYzU5OnsiY2FsbGVyQXBwbGljYXRpb24iOiJBbWVsaWEiLCJpcEFkZHJlc3MiOiIvMTk0LjUuMjE1LjIwNDoyOTY4NCIsImJ5cGFzc0FwaUF1dGgiOiJmYWxzZSIsInVzZXJOYW1lIjoidHJhZmZpY0BzbWFzaG1lZGlhLmNvbSIsInVzZXJJZCI6IjEwNjM0MTk5IiwiZGF0YVNvdXJjZVR5cGUiOiJNWV9PQl9DT00ifTplYzYwYWFhZGMzZDAxMTIwY2ZkNTI5Zjk0OTY0NWM4YWVjNTUwM2YxN2I1YzM3NDhkZGRmNjgxN2VmODI3MjU4YmNiNmU1YjAyZDkzNjU5ZWNkZjg2NTQ4MTk3NjQ5NWE4MTVkNDVkOTA0ZGY4N2IxZjFmNzdlOWI4MTI4NjAyYw==",
      oauth: {
        grant_type: "client_credentials",
        code: "your_code_here",
        developer_token: "your_developer_token_here",
        customer_account_id: "your_customer_account_id_here",
        account_name: "00cc98d37028239baa416817c65ebb6d47",
        secret: "Ob$$2020",
        client_id: "traffic@smashmedia.com",
        end_point: "https://api.outbrain.com/amplify/v0.1/login",
        enabled: true,
        refresh_token: "1",
        mediaGoApiToken: "1",
        client_secret: "2",
      },
    },
    crawlers_bots: {
      ip_addresses: [],
      user_agents: [],
    },
    data: {
      reports: [],
    },
    last_conversions_date_time: null,
    tokens: [
      {
        aliases: ["adi"],
        tokenRules: [],
        summarize: true,
        _id: "5754ab7722bbf9b75a799672",
        createdAt: "2016-06-05T22:45:11.219Z",
        updatedAt: "2017-07-12T23:08:43.933Z",
        name: "Ad Image",
        macro: "{AD_IMAGE}",
        placeholder: "{AD_IMAGE}",
        available_for_cpc_update: false,
        allowed_in_adsbuilder: true,
        parameter: "adi",
        created_on: "2017-07-12T23:08:43.933Z",
        focus: true,
        selectedRules: [],
        available_for_automation: false,
        type: "",
      },
    ],
    disclaimers: [
      {
        text: "<p>...</p>",
      },
    ],
    ad_settings: [
      {
        name: "Native 1200x800",
        allows_images: true,
        display_name: {
          max_length: 50,
          enabled: false,
        },
        description: {
          enabled: false,
          max_length: 0,
        },
        headline: {
          enabled: true,
          max_length: 140,
        },
        sub_headline: {
          enabled: false,
          max_length: 0,
        },
        adi: {
          dimensions: {
            width: 1200,
            height: 800,
          },
          enabled: true,
        },
        round_robin: false,
        display_url: {
          enabled: false,
          max_length: 100,
        },
        call_to_action: {
          enabled: false,
        },
        secondary_adi: {
          dimensions: {
            width: 1200,
            height: 800,
          },
          enabled: true,
        },
        thumbnail_adi: {
          dimensions: {
            width: 1200,
            height: 800,
          },
          enabled: true,
        },
        selected: false,
        _id: "bc2b4ecd-1006-40fa-bede-61676a56db5a",
      },
    ],
    remote_campaigns: [],
    url_rule_append: "&",
    accounts: [
      {
        _id: "00cc98d37028239baa416817c65ebb6d47",
        isTag: true,
        name: "Smash Media Life US 2",
      },
      {
        _id: "004d68af93bf3ff4d36410c2bfda18f0c7",
        isTag: true,
        name: "Smash Media Mortgage",
      },
      {
        _id: "00b9293b1a16676b6bcc3b377718287aeb",
        isTag: true,
        name: "Smash Media Medicare",
      },
      {
        _id: "008542b91f7c10387cc455bf4d18cbc528",
        isTag: true,
        name: "Smash Media Solar",
      },
      {
        _id: "00364c2fc0ab51c1fa3302297d76258838",
        isTag: true,
        name: "Smash Media Health Insurance",
      },
      {
        _id: "00576139fdfc0b22c1313deb4e7454014d",
        isTag: true,
        name: "Smash Media Auto Insurance",
      },
      {
        _id: "00bf2a2ed44165fdfd20e4710f56310fec",
        isTag: true,
        name: "Smash Media Home Insurance",
      },
      {
        _id: "00bf411721ae0fa87ec01ef1dc07c98577",
        isTag: true,
        name: "Smash Media Life UK",
      },
      {
        _id: "00e80c474a6dde6ee86333a4ccda268743",
        isTag: true,
        name: "Smash Media Glucose Monitoring",
      },
      {
        _id: "00aa87d40b4a4cf252a1bc3ae42e4f7ed8",
        isTag: true,
        name: "Smash Media Portable AC",
      },
      {
        _id: "00e8f2ede89efd744fefdcbd0badd9ef2c",
        isTag: true,
        name: "Smash Media Debt Relief",
      },
      {
        _id: "00670d869956d3e004e0b7416988cd297f",
        isTag: true,
        name: "Smash Media Ecomm",
      },
      {
        _id: "00d439b1bf72e2c939c0b8a750e0973795",
        isTag: true,
        name: "Smash Media Listicles",
      },
      {
        _id: "00b926e69e49e877d6b22b9acbcffb0b06",
        isTag: true,
        name: "Smash Media Life CA",
      },
      {
        _id: "00770bb0df3d7836ced3d909d198c1aa85",
        isTag: true,
        name: "Smash Media Mortgage Cashout",
      },
      {
        _id: "0003f2722b7198f63ab0df4f7903decb1e",
        isTag: true,
        name: "Smash Media Walk-in Tubs",
      },
      {
        _id: "00d36e88dec0d4ecf383abdb44845b3fa8",
        isTag: true,
        name: "Smash Media GLP-1",
      },
    ],
    notes: [
      {
        index: 1,
        class: "information",
        content: "<p>API Group: https://groups.google.com/g/outbrain-amplifyapi</p>",
      },
    ],
    time_zone_name: "EST5EDT",
    lastSynced: "2024-10-26T19:58:39.331Z",
    events: [
      {
        enabled: true,
        type: "NATIVE",
        account: ["00576139fdfc0b22c1313deb4e7454014d"],
        _id: "669ad238bad06373258073af",
        event: "OFFER_CLICK",
        name: "Smash Media - Auto Insurance - Offer Click",
        serverToServerURL: "https://tr.outbrain.com/unifiedPixel?ob_click_id={CLICK_ID}&name=OFFER_CLICK",
        trafficSource: "5e46d6787810b90011c91204",
      },
      {
        enabled: true,
        type: "NATIVE",
        account: ["004d68af93bf3ff4d36410c2bfda18f0c7"],
        _id: "669b22cc1897bf001a96130b",
        event: "CONVERSION",
        name: "Global Conversion Postback",
        serverToServerURL: "https://tr.outbrain.com/pixel?ob_click_id={CLICK_ID}&name=Lead",
        trafficSource: "5e46d6787810b90011c91204",
      },
      {
        enabled: true,
        type: "NATIVE",
        account: ["00576139fdfc0b22c1313deb4e7454014d"],
        _id: "669ee4ff95577d001abf06e3",
        event: "PAGE_VIEW",
        name: "Smash Media - Auto Insurance - Page View",
        serverToServerURL: "https://tr.outbrain.com/unifiedPixel?ob_click_id={CLICK_ID}&name=PAGE_VIEW",
        trafficSource: "5e46d6787810b90011c91204",
      },
      {
        enabled: true,
        type: "NATIVE",
        account: ["00cc98d37028239baa416817c65ebb6d47"],
        _id: "66aa6c1259abfe001ad625e1",
        event: "CONVERSION",
        name: "Global Conversion Postback (With Payout)",
        serverToServerURL: "https://tr.outbrain.com/pixel?ob_click_id={CLICK_ID}&name=Lead&orderValue={PAYOUT}",
        trafficSource: "5e46d6787810b90011c91204",
      },
    ],
    dynamic_token_data: {
      "{{REGION}}": "${region}$",
      "{{CITY}}": "${city}$",
      "{{DAY_OF_WEEK}}": "${dayofweek}$",
      "{{COUNTRY}}": "${country}$",
    },
    group: {
      _id: "575b292502d54a0e62a1bae4",
      object_name: "traffic-source",
      name: "Outbrain",
      updated_on: "2016-06-10T20:55:01.330Z",
      created_on: "2016-06-10T20:55:01.330Z",
    },
    postback_pixel: {
      value: "https://tr.outbrain.com/pixel?ob_click_id={click_id}&name=Lead",
      type: "url",
    },
    created_on: "2020-02-14T17:18:48.435Z",
    updated_on: "2020-02-14T17:18:48.436Z",
    next_consecutive_campaign_number: 377,
    remoteSettings: {
      adjustments: {
        type: "PERCENTAGE",
        limit: 1000,
      },
      blocks: {
        limit: 1500,
      },
    },
  },
  {
    _id: "61159be7649d1d0359dbb162",
    name: "Taboola",
    logo: "/taboola.svg",
    status: "active",
    nickname: "ts-62tb",
    shortname: "tb",
    api: { name: "TABOOLA" },
    api_functionality: {
      campaigns: {
        create: { end_point: "", method: "post", active: false },
        update: { end_point: "", method: "post", active: false },
        list: { end_point: "", method: "get", active: true },
        cpc: { active: true, placements_available: true, bid_available: true }
      },
      ads: {
        create: { end_point: "", method: "post", active: false },
        update: { end_point: "", method: "post", active: false },
        list: { end_point: "", method: "get", active: true }
      },
      conversions: { pixel_firing: true, action: "" }
    },
    api_credentials: {
      oauth: {},
    },
    crawlers_bots: {
      ip_addresses: [],
      user_agents: []
    },
    dynamic_token_data: {},
    data: { reports: [] },
    tokens: [],
    ad_settings: [],
    url_rule_append: "",
    accounts: [],
    notes: [],
    postback_pixel: {
      value: "",
      type: "url"
    },
    events: [],
    created_on: new Date().toISOString(),
    updated_on: new Date().toISOString(),
    lastSynced: new Date(),
    last_time_cost_update: new Date()
  }
];