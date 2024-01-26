"use strict";

import express from "express";
import { GetPosts, addPost, deletePost, getReversedPosts, searchPost, updatePost } from "./post.controller.js";

const postRouter = express.Router();

// Get All Posts
postRouter.get("/posts", GetPosts);

// Add Post
postRouter.post("/addPost", addPost);

// Get all Posts reversed (but don't change the order of the main array)
postRouter.get("/reversedPosts", getReversedPosts);

// Delete Post
postRouter.delete("/deletePost/:id", deletePost);

// Update Post
postRouter.patch("/updatePost/:id", updatePost);

// Search Post By ID
postRouter.get("/searchPost/:id", searchPost);

export default postRouter