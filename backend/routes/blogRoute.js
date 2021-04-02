import express from "express";
import Blog from "../models/blogModel.js";


const blogRoute = express.Router();

blogRoute.get("/", async (req, res) => {
  const blog = await Blog.find({})
  res.status(200).json(blog);
});

blogRoute.get("/:id", async (req, res) => {
  const blogId = req.params.id;
  const blog = await Blog.findById(blogId);
  if (blog) {
    res.status(200).send(blog);
  } else res.status(404).json({ message: "Error in finding this blog" });
});

blogRoute.post("/", async (req, res) => {
  try {
   const date = new Date();
    const formattedDate = `${date.toDateString()}`
   const stringDate = formattedDate.toString()
    const newBlog = new Blog({
      title: req.body.title,
      article: req.body.article,
      created: stringDate,
    });
    const savedBlog = await newBlog.save();
    if (savedBlog) {
      return res
        .status(200)
        .json({ message: "New blog has been created", blog: savedBlog });
    }
  } catch (err) {
    res.status(400).json({ message: "Error in creating blog" });
  }
});

blogRoute.put("/:id", async (req, res) => {
  const blogId = req.params.id;
  const blog = await Blog.findById(blogId);
  if (blog) {
    blog.title = req.body.title;
    blog.article = req.body.article;
    blog.created = blog.updatedAt.toDateString().toString();
    const updatedBlog = await blog.save();
    if (updatedBlog) {
      return res
        .status(200)
        .send({ message: "Blog has been Edited", blog: updatedBlog });
    }
  }
  return res.status(500).send({ message: "Error in editing this blog" });
});

blogRoute.delete("/:id", async (req, res) => {
  const blogId = req.params.id;
  const deletedBlog = await Blog.findById(blogId);
  if ( deletedBlog) {
    const deleteBlog = await Blog.deleteOne();
    res.send({ message: "Blog has been Deleted" });
  } else {
    res.status(404).send({ message: "Blog Not Found" });
  }
});

export default blogRoute;
