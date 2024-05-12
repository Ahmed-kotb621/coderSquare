import express, { RequestHandler, request } from "express";
import { db } from "./datastore";
const app = express();

app.use(express.json());

// middle ware

const loggerMiddleWare: RequestHandler = (req, res, next) => {
  console.log(req.path, req.method, "body=>", req.body);
  next();
};

app.use(loggerMiddleWare);

// endpoint get posts => after hostname and port number execute function
app.get("/posts", (request, response) => {
  response.send({ posts: db.listPosts() });
});

// endpoint post

app.post("/posts", (req, res) => {
  const post = req.body;
  db.createPost(post);
  res.sendStatus(200);
});

app.listen(3000);
