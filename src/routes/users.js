import { Router } from "express";
import {
  getUserByIdController,
  getUsersController,
} from "../controllers/users.js";

export const router = Router();

router.get("/", getUsersController);

router.get("/:id", getUserByIdController);
