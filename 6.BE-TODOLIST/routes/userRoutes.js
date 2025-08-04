import { Router } from "express";
import userController from "../controllers/userController.js";

const router = new Router();

router
  .get("/", userController.getUsers)
  .get("/:id", userController.getUser)
  .post("/", userController.createUser);

export default router;
