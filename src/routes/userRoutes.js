import express from "express";
import * as userController from "../controllers/userController.js";

const router = express.Router();

router.get("/users", userController.getUsers);
router.post("/users", userController.createUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);
router.get("/users/search", userController.searchUsers);

export default router;
