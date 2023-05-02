import express from "express";
import { getAllBlogs, createBlog, updateBlog, blogGetById, deleteBlog, getBlogsByUser } from "../controllers/blog-controller";

const blogRouter = express.Router();

blogRouter.get('/', getAllBlogs);
blogRouter.post('/', createBlog);
blogRouter.put('/:id', updateBlog);
blogRouter.get('/:id', blogGetById);
blogRouter.delete('/:id', deleteBlog);
blogRouter.get('/user/:id', getBlogsByUser);

export default blogRouter;