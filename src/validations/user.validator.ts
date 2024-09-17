import Joi from "joi";

const addUserSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().min(6).email().required(),
  password: Joi.string().min(4).max(10).required(),
  age: Joi.number().min(16).required(),
  phone: Joi.string().min(10).required(),
  role: Joi.string().required(),
  isVerified: Joi.boolean().required(),
  isDeleted: Joi.boolean().required(),
});

const editUserSchema = Joi.object({
  name: Joi.string().min(3).required().optional(),
  email: Joi.string().min(6).email().optional(),
  password: Joi.string().min(4).max(10).optional(),
  age: Joi.number().min(16).required().optional(),
  phone: Joi.string().min(10).required().optional(),
  role: Joi.string().required().optional(),
  isVerified: Joi.boolean().required().optional(),
  isDeleted: Joi.boolean().required().optional(),
});

export const userValidator = {
  addUserSchema,
  editUserSchema,
};
