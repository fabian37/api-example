import usersDB from "../models/users.js";

export const getUserById = (id) => {
  const user = usersDB.find((user) => user.id == id);
  return user;
};
