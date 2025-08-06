import { Router } from "express";
import userController from "../controllers/userController.js";
import verifyToken from "../midleware/verifyToken.js";
const router = new Router();
router
  .get("/login", userController.login)
  .post("/", userController.createUser)
  .put("/", verifyToken.verifyToken, userController.updateUser);

export default router;
