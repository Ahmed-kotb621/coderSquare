import { CommentDao } from "./CommentDao";
import { LikeDao } from "./LikeDao";
import { PostDao } from "./PostDao";
import { UserDao } from "./UserDao";
import { InMemoryDataBase } from "./memorydb";

export interface DataStore extends UserDao, PostDao, LikeDao, CommentDao {}

export const db = new InMemoryDataBase();
