// User routes: maps endpoints to controller methods
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// HTTP GET /users - fetch all users
router.get("/", userController.getAllUsers);
// HTTP GET /users/:id - fetch one user
router.get("/:id", userController.getUserById);
// HTTP POST /users - create user
router.post("/", userController.createUser);
// HTTP PUT /users/:id - update user
router.put("/:id", userController.updateUser);
// HTTP DELETE /users/:id - delete user
router.delete("/:id", userController.deleteUser);

module.exports = router;
