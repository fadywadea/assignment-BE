"use strict";

import { users } from "../../../database/models/users.model.js";

// Get All Users
export const getUsers = async (req, res) => {
  res.json({ data: users });
};

// Add User
export const addUser = async (req, res) => {
  users.push(req.body);
  res.json({ message: "success" });
};

// Get all users sorted alphabetically by name
export const sortUsersByName = async (req, res) => {
  const sortUsers = users.sort((a, b) => a.name.localeCompare(b.name));
  res.json({ data: sortUsers });
};

// Delete User
export const deleteUser = async (req, res) => {
  const deleteUser = users.find((user) => user.id == req.params.id);
  if (deleteUser) {
    const index = users.findIndex((user) => user.id == deleteUser.id);
    users.splice(index, 1);
    res.json({ message: "success" });
  } else {
    res.json({ message: "not found" });
  }
};

// Update User
export const UpdateUser = async (req, res) => {
  const findUser = users.find((user) => user.id == req.params.id);
  if (findUser) {
    findUser.name = req.body.name;
    findUser.age = req.body.age;
    res.json({ message: "success" });
  } else {
    res.json({ message: "not found" });
  }
};

// Search User By ID
export const searchUser = async (req, res) => {
  const searchId = users.filter((user) => user.id == req.params.id);
  if (searchId.length) {
    res.json({ message: searchId });
  } else {
    res.json({ message: "user not found" });
  }
};
