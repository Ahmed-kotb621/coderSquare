import express, { ErrorRequestHandler, RequestHandler, request } from "express";
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
app.get("/v1/posts", listPostHandler);
app.post("/v1/posts", createPostHandler);
// comments endpoints

// Error Hanlder middle ware
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  return res.status(500).send("Ooops Error in server side, plz try again !");
};

app.use(errorHandler);

app.listen(3000);
