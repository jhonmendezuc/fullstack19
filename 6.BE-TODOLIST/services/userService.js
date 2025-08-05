import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

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
  if (user) {
    const match = await comparePassword(password, user.password);
    if (!match) {
      return { respuesta: "fail", message: "password incorrecto" };
    }
  }
  return { respuesta: "success", message: user };
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
};
