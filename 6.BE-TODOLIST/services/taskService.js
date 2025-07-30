const tasks = [
  {
    id: 1,
    title: "Learn React",
    description: "tarea1",
    status: false,
    user: 1,
  },
  {
    id: 2,
    title: "aprender node",
    description: "tarea2",
    status: true,
    user: 1,
  },
];

const createTask = (body) => {
  tasks.push(body);
};
const getTask = () => {
  return tasks;
};
//const completeTask = ();
//const DeleteTask = ();

export default {
  createTask,
  getTask,
};
