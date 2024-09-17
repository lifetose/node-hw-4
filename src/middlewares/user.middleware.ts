import { NextFunction, Request, Response } from "express";

import { ApiError } from "../errors/api-error";
import { userValidator } from "../validations/user.validator";

class UserMiddleware {
  public isAddUserBodyValid() {
    return (req: Request, _: Response, next: NextFunction) => {
      const { body } = req;
      try {
        const { error } = userValidator.addUserSchema.validate(body);
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
        const { error } = userValidator.editUserSchema.validate(body);
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
