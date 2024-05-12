import { RequestHandler } from "express";
import { db } from "../datastore";
import { Post } from "../types";
import crypto from "crypto";

export const listPostHandler: RequestHandler = (req, res) => {
  res.send({ posts: db.listPosts() });
};

export const createPostHandler: RequestHandler = (req, res) => {
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
