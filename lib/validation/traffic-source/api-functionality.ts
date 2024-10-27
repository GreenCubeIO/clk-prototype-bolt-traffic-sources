import Joi from 'joi';

const httpMethod = Joi.string().valid('post', 'get', 'put');

const endpointConfig = Joi.object({
  method: httpMethod,
  active: Joi.boolean(),
  end_point: Joi.string().uri().allow('')
});

export const ApiFunctionalitySchema = Joi.object({
  campaigns: Joi.object({
    create: endpointConfig,
    update: endpointConfig,
    list: endpointConfig,
    cpc: Joi.object({
      active: Joi.boolean(),
      placements_available: Joi.boolean(),
      bid_available: Joi.boolean()
    })
  }).required(),
  ads: Joi.object({
    create: endpointConfig,
    update: endpointConfig,
    list: endpointConfig
  }).required(),
  conversions: Joi.object({
    pixel_firing: Joi.boolean(),
    action: Joi.string().allow('')
  }).required()
});