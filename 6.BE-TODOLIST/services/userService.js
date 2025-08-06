import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

const createUser = async (body) => {
  const pass = await hashPassword(body.password);
  const data = await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
      password: pass,
    },
  });
  return data;
};

const login = async (body) => {
  const { email, password } = body;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (user == null) {
    return { respuesta: "fail", message: "usuario no encontrado" };
  }
  if (user) {
    const match = await comparePassword(password, user.password);
    if (!match) {
      return { respuesta: "fail", message: "password incorrecto" };
    }
    user.password = "";
    const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: "1h" });
    return { respuesta: "success", message: token };
  }
};

const updateUser = async (body) => {
  const pass = await hashPassword(body.password);
  const data = await prisma.user.update({
    where: {
      email: body.email,
    },
    data: {
      name: body.name,
      password: pass,
    },
  });
  return data;
};

async function hashPassword(password) {
  const passwordHash = await bcrypt.hash(password, 10);
  return passwordHash;
}

async function comparePassword(passwordBody, passwordBd) {
  const match = await bcrypt.compare(passwordBody, passwordBd);
  return match;
}

export default {
  createUser,
  login,
  updateUser,
};
