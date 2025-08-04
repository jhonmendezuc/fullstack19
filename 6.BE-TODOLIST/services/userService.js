const users = [
  {
    id: 1,
    name: "jhon mendez",
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

const createUser = (body) => {
  users.push(body);
};
const getUsers = () => {
  return users;
};

const getUser = (id) => {
  console.log(typeof id);
  return users.find((user) => user.id == id);
};
//const completeUser = ();
//const DeleteUser = ();

export default {
  createUser,
  getUsers,
  getUser,
};
