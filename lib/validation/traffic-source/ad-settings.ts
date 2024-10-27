import Joi from 'joi';

const DimensionsSchema = Joi.object({
  width: Joi.number().required(),
  height: Joi.number().required()
});

const DisplaySchema = Joi.object({
  enabled: Joi.boolean().required(),
  max_length: Joi.number().min(0)
});

export const AdSettingSchema = Joi.object({
  _id: Joi.string(),
  name: Joi.string().required(),
  allows_images: Joi.boolean().required(),
  round_robin: Joi.boolean(),
  selected: Joi.boolean(),
  display_name: DisplaySchema.required(),
  display_url: DisplaySchema.required(),
  call_to_action: Joi.object({
    enabled: Joi.boolean().required()
  }).required(),
  description: DisplaySchema.required(),
  headline: DisplaySchema.required(),
  sub_headline: DisplaySchema.required(),
  adi: Joi.object({
    dimensions: DimensionsSchema.required(),
    enabled: Joi.boolean().required()
  }).required(),
  secondary_adi: Joi.object({
    dimensions: DimensionsSchema.required(),
    enabled: Joi.boolean().required()
  }).required(),
  thumbnail_adi: Joi.object({
    dimensions: DimensionsSchema.required(),
    enabled: Joi.boolean().required()
  }).required()
});