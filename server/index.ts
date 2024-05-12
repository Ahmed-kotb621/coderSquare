import express, { RequestHandler, request } from "express";
import { db } from "./datastore";
import { createPostHandler, listPostHandler } from "./handlers/postHandlers";
const app = express();

app.use(express.json());

// middle ware

const loggerMiddleWare: RequestHandler = (req, res, next) => {
  console.log(req.path, req.method, "body=>", req.body);
  next();
};

app.use(loggerMiddleWare);

// endpoint get posts => after hostname and port number execute function
app.get("/posts", listPostHandler);
app.post("/posts", createPostHandler);

app.listen(3000);
