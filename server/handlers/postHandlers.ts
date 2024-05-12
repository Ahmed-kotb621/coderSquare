import { RequestHandler } from "express";
import { db } from "../datastore";
import { Post } from "../types";
import crypto from "crypto";

export const listPostHandler: RequestHandler = (req, res) => {
  // throw new Error("oooops!");
  res.send({ posts: db.listPosts() });
};

export const createPostHandler: RequestHandler = (req, res) => {
  if (!req.body.title || !req.body.url || !req.body.userId) {
    return res.sendStatus(400);
  }
  const post: Post = {
    id: crypto.randomUUID(),
    title: req.body.title,
    url: req.body.url,
    userId: req.body.userId,
    postAt: Date.now(),
  };

  db.createPost(post);
  res.sendStatus(200);
};
