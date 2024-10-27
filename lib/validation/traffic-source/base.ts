import Joi from 'joi';
import { TIME_ZONES } from '@/lib/constants';
import { ITrafficSource } from '@/lib/types/traffic';
import { GroupSchema } from './group';
import { TokenSchema } from './token';
import { AdSettingSchema } from './ad-settings';
import { EventSchema } from './event';
import { ApiCredentialsSchema } from './api-credentials';
import { ApiFunctionalitySchema } from './api-functionality';

export const TrafficSourceSchema = Joi.object<ITrafficSource>({
  _id: Joi.string(),
  name: Joi.string().required().messages({
    'string.empty': 'Name is required',
    'any.required': 'Name is required'
  }),
  nickname: Joi.string().required().messages({
    'string.empty': 'Nickname is required',
    'any.required': 'Nickname is required'
  }),
  shortname: Joi.string().required().messages({
    'string.empty': 'Short name is required',
    'any.required': 'Short name is required'
  }),
  logo: Joi.string().uri().allow('').optional(),
  status: Joi.string().valid('active', 'inactive', 'pending').required(),
  time_zone_name: Joi.string().valid(...TIME_ZONES).required().messages({
    'any.only': 'Please select a valid time zone'
  }),
  api: Joi.object({
    name: Joi.string().required()
  }).required(),
  api_functionality: ApiFunctionalitySchema,
  api_credentials: ApiCredentialsSchema,
  group: GroupSchema,
  tokens: Joi.array().items(TokenSchema).default([]),
  ad_settings: Joi.array().items(AdSettingSchema).default([]),
  events: Joi.array().items(EventSchema).default([]),
  accounts: Joi.array().items(
    Joi.object({
      _id: Joi.string().required(),
      name: Joi.string().required(),
      isTag: Joi.boolean()
    })
  ).default([]),
  notes: Joi.array().items(
    Joi.object({
      index: Joi.number(),
      class: Joi.string().valid('warning', 'danger', 'information', 'success'),
      content: Joi.string().required()
    })
  ).default([]),
  postback_pixel: Joi.object({
    value: Joi.string().allow(''),
    type: Joi.string().valid('url', 'raw_code').default('url')
  }).required(),
  dynamic_token_data: Joi.object().pattern(
    Joi.string(),
    Joi.string()
  ).default({}),
  crawlers_bots: Joi.object({
    ip_addresses: Joi.array().items(Joi.string()).default([]),
    user_agents: Joi.array().items(Joi.string()).default([])
  }).required(),
  data: Joi.object({
    reports: Joi.array().default([])
  }).required(),
  url_rule_append: Joi.string().allow('').default(''),
  remote_campaigns: Joi.array().default([]),
  created_on: Joi.date().iso(),
  updated_on: Joi.date().iso(),
  lastSynced: Joi.date().iso().allow(null),
  last_time_cost_update: Joi.date().iso().allow(null),
  last_conversions_date_time: Joi.string().allow(null),
  next_consecutive_campaign_number: Joi.number().integer().min(0).default(0)
});