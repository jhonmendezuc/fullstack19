import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getTasks = async () => {
  const data = await prisma.task.findMany();
  return data;
};

const getTask = async (_id) => {
  const data = await prisma.task.findUnique({
    where: {
      id: _id,
    },
  });
  return data;
};
const createTask = async (body) => {
  const data = await prisma.task.create({
    data: {
      title: body.title,
      description: body.description,
      user: {
        connect: {
          id: body.userId,
        },
      },
    },
  });
  return data;
};

const updateTask = async (_id, body) => {
  const data = await prisma.task.update({
    where: {
      id: _id,
    },
    data: {
      title: body.title,
      description: body.description,
      status: body.status,
    },
  });
  return data;
};
const deleteTask = async (_id) => {
  const data = await prisma.task.delete({
    where: {
      id: _id,
    },
  });

  return data;
};

export default {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
};
