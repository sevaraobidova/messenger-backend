const userModel = require("../userModel/userModel");
import mongoose from "mongoose";
import { Request, Response } from "express";

class UserController {
  async register(req: Request, res: Response) {
    try {
      if (
        !req.body.name ||
        !req.body.surname ||
        !req.body.username ||
        !req.body.password
      ) {
        res.status(400).json({ message: "Invalid credentials" });
      }
      const newUser = await userModel.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      console.log("something went wrong");
    }
  }
}

const userController = new UserController();
module.exports = userController;
