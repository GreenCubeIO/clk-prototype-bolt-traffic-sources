import Joi from 'joi';

export const GroupSchema = Joi.object({
  _id: Joi.string().required(),
  name: Joi.string().required(),
  object_name: Joi.string().valid('traffic-source').required(),
  updated_on: Joi.date().iso(),
  created_on: Joi.date().iso()
});