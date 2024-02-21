const userModel = require("../model/userModel");
import mongoose from "mongoose";
import { Request, Response } from "express";

class UserController {
  async register(req: Request, res: Response) {
    const { name, surname, username, password } = req.body;
    try {
      // Check for required fields and username existence
      const existingUser = await userModel.findOne({
        username: username,
      });
      if (!name || !surname || !username || !password) {
        // Handle missing credentials or username already taken
        if (existingUser) {
          return res.status(400).json({ error: "Username already taken" });
        } else {
          return res.status(400).json({ message: "Invalid credentials" });
        }
      }

      // Create new user (if username was available)
      const newUser = await userModel.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      // Handle potential errors (e.g., database connection issues)
      console.error("Error during registration:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  async login(req: Request, res: Response) {
    const { username, password } = req.body;
    try {
      let user = await userModel.findOne({
        username: username,
      });
      if (user) {
        const result = password === user.password;
        if (result) {
          res.status(201).json(user);
        } else {
          res.status(400).json({ error: "password doesn't match" });
        }
      } else {
        res.status(400).json({ error: "User doesn't exist" });
      }
    } catch (error) {
      console.error("Error getting user:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  // async update(req: Request, res: Response) {
  //   try {
  //     let user = await userModel.findById(req.params.id);
  //     console.log(user);
  //     if (!user) {
  //       res.status(404).json({ message: "User not found" });
  //     }
  //   } catch {}
  // }
}

const userController = new UserController();
module.exports = userController;
