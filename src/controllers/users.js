import { getUserById } from "../services/getUserById.js";
import { getUsers } from "../services/getUsers.js";

export const getUsersController = (req, res) => {
  const { name } = req.query;
  const users = getUsers(name);
  if (!users) {
    return res.status(404).json({ message: "Users not found" });
  }
  res.json(users);
};

export const getUserByIdController = (req, res) => {
  const { id } = req.params;
  const user = getUserById(id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
};
