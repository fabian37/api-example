import { router as moviesRouter } from "./movies.js";
import { router as usersRouter } from "./users.js";

export const apiRouter = (app) => {
  app.use("/api/v1/movies", moviesRouter);
  app.use("/api/v1/users", usersRouter);
};
