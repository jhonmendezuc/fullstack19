import { Router } from "express";
import userController from "../controllers/userController.js";

const router = new Router();

router.get("/login", userController.login).post("/", userController.createUser);

export default router;
