import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getTasks = async () => {
  const data = await prisma.task.findMany();
  return data;
};

const createTask = (body) => {
  const data = prisma.task.create({
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

const getTask = (id) => {
  return tasks.find((task) => task.id === id);
};
//const completeTask = ();
//const DeleteTask = ();

export default {
  createTask,
  getTasks,
  getTask,
};
