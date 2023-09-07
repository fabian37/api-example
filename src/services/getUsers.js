import usersDB from "../models/users.js";

export const getUsers = (name) => {
  if (name) {
    const users = usersDB.filter((user) => user.name.includes(name));
    return users;
  }
  return usersDB;
};
