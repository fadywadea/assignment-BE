"use strict";

import express from "express";
import { UpdateUser, addUser, deleteUser, getUsers, searchUser, sortUsersByName } from "./user.controller.js";

const userRouter = express.Router();

// Get All Users
userRouter.get("/users", getUsers);

// Add User
userRouter.post("/addUser", addUser);

// Get all users sorted alphabetically by name
userRouter.get("/sortUsersByName", sortUsersByName);

// Delete User
userRouter.delete("/deleteUser/:id", deleteUser);

// Update User
userRouter.patch("/UpdateUser/:id", UpdateUser);

// Search User By ID
userRouter.get("/search/:id", searchUser);

export default userRouter;
