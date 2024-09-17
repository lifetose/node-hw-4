import { NextFunction, Request, Response } from "express";
import Joi from "joi";

import { ApiError } from "../errors/api-error";

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

class UserMiddleware {
  public isAddUserBodyValid() {
    return (req: Request, _: Response, next: NextFunction) => {
      const { body } = req;
      try {
        const { error } = addUserSchema.validate(body);
        if (error) {
          throw new ApiError(error.message, 400);
        }
        next();
      } catch (e) {
        next(e);
      }
    };
  }

  public isEditUserBodyValid() {
    return (req: Request, _: Response, next: NextFunction) => {
      const { body } = req;
      try {
        const { error } = editUserSchema.validate(body);
        if (error) {
          throw new ApiError(error.message, 400);
        }
        next();
      } catch (e) {
        next(e);
      }
    };
  }
}

export const userMiddleware = new UserMiddleware();
