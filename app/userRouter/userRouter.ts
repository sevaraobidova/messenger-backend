import express from "express";
const userController = require("../userController/userController");
const router = express.Router();

router.post("/", userController.register);

module.exports = router;
