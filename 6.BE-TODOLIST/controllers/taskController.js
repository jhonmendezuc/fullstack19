import taskService from "../services/taskService.js";

const getTasks = async (req, res) => {
  const data = await taskService.getTasks();
  res.send(data);
};

const getTask = (req, res) => {
  const id = req.params.id;
  const data = taskService.getTask(id);
  if (!data) {
    res.status(404).send("tarea no encontrada");
    return;
  }
  res.send(data);
};

const createTask = async (req, res) => {
  const body = req.body;
  const data = await taskService.createTask(body);
  res.send(data);
};

export default {
  getTasks,
  getTask,
  createTask,
};
