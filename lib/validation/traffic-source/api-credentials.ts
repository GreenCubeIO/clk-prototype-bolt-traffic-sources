import Joi from 'joi';

export const ApiCredentialsSchema = Joi.object({
  authentication_method: Joi.string().valid('oauth', 'oauth_refresh', 'basic', 'bypass'),
  authentication_request_method: Joi.string().valid('get', 'post', 'put'),
  should_save_token: Joi.boolean(),
  token_expiration_days: Joi.number().integer().min(1),
  last_time_updated: Joi.date().iso(),
  access_token: Joi.string().allow(''),
  oauth: Joi.object({
    enabled: Joi.boolean(),
    account_name: Joi.string().allow(''),
    end_point: Joi.string().uri().allow(''),
    grant_type: Joi.string().allow(''),
    client_id: Joi.string().allow(''),
    secret: Joi.string().allow(''),
    refresh_token: Joi.string().allow(''),
    code: Joi.string().allow(''),
    developer_token: Joi.string().allow(''),
    customer_account_id: Joi.string().allow(''),
    mediaGoApiToken: Joi.string().allow(''),
    client_secret: Joi.string().allow('')
  }).default({})
}).default({});