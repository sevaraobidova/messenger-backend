import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./.development.env" });

const nodeenv = process.env.NODE_ENV;
const PORT = process.env.PORT;
const MY_LINK = process.env.MY_LINK;
const MONGO_LINK = process.env.MONGO_LINK;
const userRouter = require("../app/userRouter/userRouter");
const app: Application = express();

app.use(express.json());
app.use("/user", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world hello");
});

mongoose
  .connect(`${MONGO_LINK}`)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.listen(PORT, () => console.log(`Server is running on ${MY_LINK}:${PORT}`));
