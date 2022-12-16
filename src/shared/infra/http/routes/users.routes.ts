import uploadConfig from "config/upload";
import { Router } from "express";
import { CreateUserController } from "modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import multer from "multer";
import { ensureAuthenticated } from "shared/infra/http/middlewares/ensureAuthenticated";

const userRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserControler = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

userRoutes.post("/", createUserControler.handle);
userRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

export { userRoutes };
