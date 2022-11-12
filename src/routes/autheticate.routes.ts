import { Router } from "express";

import { AuthenticateUserController } from "../modules/accounts/useCases/authenticateUSer/AuthenticateUserController";

const autheticateRoutes = Router();
const authenticateUserController = new AuthenticateUserController();

autheticateRoutes.get("/sessions", authenticateUserController.handle);

export { autheticateRoutes };
