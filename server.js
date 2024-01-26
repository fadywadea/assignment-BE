"use strict";

import express from "express";
import userRouter from "./src/modules/users/user.routes.js";
import postRouter from "./src/modules/posts/post.routes.js";

const app = express();
const port = 3000;

// middle ware
app.use(express.json());

// server running...
app.get("/", (req, res) => {
  res.json({ message: "server running..." });
});

// user APIs:
app.use(userRouter);

// post APIs:
app.use(postRouter);


// port the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
