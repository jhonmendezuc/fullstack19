import userService from "../services/userService.js";

const login = async (req, res) => {
  const body = req.body;
  const data = await userService.login(body);
  if (!data) {
    res.status(404).send("usuario no encontrado");
    return;
  }
  res.send(data);
};

const createUser = async (req, res) => {
  const body = req.body;
  const data = await userService.createUser(body);
  res.send(data);
};

export default {
  login,
  createUser,
};
