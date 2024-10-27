import Joi from 'joi';
import { IOffer } from '@/lib/types/offer';
import { TIME_ZONES } from './constants';

export const OfferSchemaJoi = Joi.object<IOffer>({
  _id: Joi.string(),
  name: Joi.string().required().messages({
    'string.empty': 'Offer name is required',
    'any.required': 'Offer name is required'
  }),
  status: Joi.string().valid('active', 'inactive').required(),
  time_zone_name: Joi.string().valid(...TIME_ZONES).required().messages({
    'any.only': 'Please select a valid time zone'
  }),
  income_type: Joi.string().valid('main', 'secondary').required(),
  lead_action_goal: Joi.string().valid('CALL', 'REDIRECT').required(),
  fire_traffic_souce_pixel: Joi.boolean().default(true),
  allow_zero_amount_pixel_firing: Joi.boolean().default(true),
  payout: Joi.number().min(0).required(),
  url: Joi.string().uri().required().messages({
    'string.uri': 'Please enter a valid URL',
    'string.empty': 'URL is required'
  }),
  disclaimer: Joi.string().allow(''),
  content: Joi.object({
    name: Joi.string().required().messages({
      'string.empty': 'Content name is required'
    }),
    url: Joi.string().uri().required().messages({
      'string.uri': 'Please enter a valid content URL',
      'string.empty': 'Content URL is required'
    })
  }).required(),
  category: Joi.object({
    _id: Joi.string(),
    name: Joi.string().required(),
    created_on: Joi.date().iso(),
    updated_on: Joi.date().iso()
  }).required(),
  daily_cap: Joi.object({
    cap_type: Joi.string().valid('uncapped', 'daily_cap', 'cap_by_day').required(),
    cvrs: Joi.when('cap_type', {
      is: 'daily_cap',
      then: Joi.number().min(0).required(),
      otherwise: Joi.number().optional()
    }),
    revenue: Joi.when('cap_type', {
      is: 'daily_cap',
      then: Joi.number().min(0).required(),
      otherwise: Joi.number().optional()
    }),
    percentage_alert: Joi.number().min(0).max(100).default(80),
    notifyTo: Joi.array().items(Joi.string()).default([]),
    warned: Joi.boolean().default(false),
    alerted: Joi.boolean().default(false),
    days: Joi.object({
      monday: Joi.object({
        amount: Joi.number().min(0),
        uncapped: Joi.boolean(),
        no_leads_allowed: Joi.boolean()
      }),
      tuesday: Joi.object({
        amount: Joi.number().min(0),
        uncapped: Joi.boolean(),
        no_leads_allowed: Joi.boolean()
      }),
      wednesday: Joi.object({
        amount: Joi.number().min(0),
        uncapped: Joi.boolean(),
        no_leads_allowed: Joi.boolean()
      }),
      thursday: Joi.object({
        amount: Joi.number().min(0),
        uncapped: Joi.boolean(),
        no_leads_allowed: Joi.boolean()
      }),
      friday: Joi.object({
        amount: Joi.number().min(0),
        uncapped: Joi.boolean(),
        no_leads_allowed: Joi.boolean()
      }),
      saturday: Joi.object({
        amount: Joi.number().min(0),
        uncapped: Joi.boolean(),
        no_leads_allowed: Joi.boolean()
      }),
      sunday: Joi.object({
        amount: Joi.number().min(0),
        uncapped: Joi.boolean(),
        no_leads_allowed: Joi.boolean()
      })
    }).when('cap_type', {
      is: 'cap_by_day',
      then: Joi.required(),
      otherwise: Joi.optional()
    })
  }).required()
});