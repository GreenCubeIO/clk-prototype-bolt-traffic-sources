import Joi from 'joi';

const TokenRuleSchema = Joi.object({
  find_this: Joi.string().required(),
  name: Joi.string().required(),
  replace_with: Joi.string().allow(''),
  value: Joi.string().required()
});

export const TokenSchema = Joi.object({
  _id: Joi.string(),
  name: Joi.string().required(),
  macro: Joi.string().required(),
  placeholder: Joi.string(),
  parameter: Joi.string(),
  type: Joi.string(),
  created_on: Joi.date().iso(),
  createdAt: Joi.date().iso(),
  updatedAt: Joi.date().iso(),
  aliases: Joi.array().items(Joi.string()).default([]),
  tokenRules: Joi.array().items(TokenRuleSchema).default([]),
  selectedRules: Joi.array().items(TokenRuleSchema).default([]),
  focus: Joi.boolean(),
  summarize: Joi.boolean(),
  allowed_in_adsbuilder: Joi.boolean(),
  available_for_cpc_update: Joi.boolean(),
  available_for_automation: Joi.boolean()
});