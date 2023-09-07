import express from "express";
import cors from "cors";
import "dotenv/config";
import { apiRouter } from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(cors());

apiRouter(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
