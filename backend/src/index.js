import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./lib/db.js";

import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
  connectDB();
});
