"use strict";

import { posts } from "../../../database/models/posts.model.js";

// Get All Posts
export const GetPosts = async (req, res) => {
  res.json({ data: posts });
};

// Add Post
export const addPost = async (req, res) => {
  posts.push(req.body);
  res.json({ message: "success" });
};

// Get all Posts reversed (but don't change the order of the main array)
export const getReversedPosts = (req, res) => {
  const reversedPosts = [...posts].reverse();
  res.json({ data: reversedPosts });
};

// Delete Post
export const deletePost = (req, res) => {
  const deletePost = posts.find((post) => post.id == req.params.id);
  if (deletePost) {
    const index = posts.findIndex((post) => post.id == deletePost.id);
    posts.splice(index, 1);
    res.json({ message: "success" });
  } else {
    res.json({ message: "not found" });
  }
};

// Update Post
export const updatePost = (req, res) => {
  const findPost = posts.find((post) => post.id == req.params.id);
  if (findPost) {
    findPost.title = req.body.title;
    findPost.content = req.body.content;
    res.json({ message: "success" });
  } else {
    res.json({ message: "not found" });
  }
};

// Search Post By ID
export const searchPost = (req, res) => {
  const searchId = posts.filter((post) => post.id == req.params.id);
  if (searchId.length) {
    res.json({ message: searchId });
  } else {
    res.json({ message: "post not found" });
  }
};
