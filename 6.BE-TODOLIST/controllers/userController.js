import userService from "../services/userService.js";

const getUsers = (req, res) => {
  const data = userService.getUsers();
  res.send(data);
};

const getUser = (req, res) => {
  const id = req.params.id;
  const data = userService.getUser(id);
  if (!data) {
    res.status(404).send("tarea no encontrada");
    return;
  }
  res.send(data);
};

const createUser = (req, res) => {
  const body = req.body;
  console.log(body);
  userService.createUser(body);
  res.send("tarea creada");
};

export default {
  getUsers,
  getUser,
  createUser,
};
