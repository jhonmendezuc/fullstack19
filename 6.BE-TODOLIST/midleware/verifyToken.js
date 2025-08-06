import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const verifyToken = (req, res, next) => {
  //extraer token de la peticion del header
  if (!req.headers.authorization) {
    return res.status(401).send("token requerido");
  }
  const token = req.headers.authorization.split(" ")[1];
  try {
    const user = jwt.verify(token, process.env.SECRET_KEY);
    next();
  } catch (err) {
    return res.status(401).send("token invalido");
  }
};

export default {
  verifyToken,
};
