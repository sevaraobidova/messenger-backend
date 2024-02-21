const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

router.post("/", userController.register).get("/", userController.login);

// router
//   .get("/:id", userController.getById)
//   .patch("/:id", userController.edit)
//   .delete("/:id", userController.delete);
module.exports = router;
