import { Router } from "express";
import taskController from "../controllers/taskController.js";
import verifyToken from "../midleware/verifyToken.js";

const router = new Router();

router.use(verifyToken.verifyToken);
router
  .get("/", taskController.getTasks)
  .get("/:id", taskController.getTask)
  .post("/", taskController.createTask)
  .put("/:id", taskController.updateTask)
  .delete("/:id", taskController.deleteTask);

export default router;
