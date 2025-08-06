import userService from "../services/userService.js";

const login = async (req, res) => {
  const body = req.body;
  const data = await userService.login(body);
  if (data.respuesta == "fail") {
    res.status(401).send(data);
    return;
  }
  res.send(data);
};

const createUser = async (req, res) => {
  const body = req.body;
  const data = await userService.createUser(body);
  res.send(data);
};

const updateUser = async (req, res) => {
  const body = req.body;
  const data = await userService.updateUser(body);
  res.send(data);
};

export default {
  login,
  createUser,
  updateUser,
};
