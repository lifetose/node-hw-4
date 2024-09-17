import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { commonMiddleware } from "../middlewares/common.middleware";
import { userMiddleware } from "../middlewares/user.middleware";

const router = Router();

router.get("/", userController.getList);
router.post("/", userMiddleware.isAddUserBodyValid(), userController.create);

router.get(
  "/:userId",
  commonMiddleware.isIdValid("userId"),
  userController.getById,
);
router.put(
  "/:userId",
  commonMiddleware.isIdValid("userId"),
  userMiddleware.isEditUserBodyValid(),
  userController.updateById,
);
router.delete(
  "/:userId",
  commonMiddleware.isIdValid("userId"),
  userController.deleteById,
);

export const userRouter = router;
