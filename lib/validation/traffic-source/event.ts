import Joi from 'joi';

export const EventSchema = Joi.object({
  _id: Joi.string(),
  enabled: Joi.boolean().default(true),
  type: Joi.string().valid('NATIVE').required(),
  account: Joi.array().items(Joi.string()),
  event: Joi.string().valid('OFFER_CLICK', 'CONVERSION', 'PAGE_VIEW').required(),
  name: Joi.string().required(),
  serverToServerURL: Joi.string().uri().required(),
  trafficSource: Joi.string().required()
});