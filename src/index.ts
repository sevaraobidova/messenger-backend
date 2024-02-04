import express, { Application, Request, Response } from "express";
import mongoose from "mongoose";
const userRouter = require("../app/userRouter/userRouter");
const app: Application = express();
const Port: number = 3333;

app.use(express.json());
app.use("/user", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

mongoose
  .connect("mongodb://localhost:27017/Messenger")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.listen(Port, () => console.log(`Server is running in ${Port} port`));
