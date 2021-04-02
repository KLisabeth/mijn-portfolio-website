import mongoose from "mongoose";

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  article: {
    type: String,
    required: true,
    minlength: [200],
  },
  created: {
    type: String,
    required: true,
  }


}, { timestamps: true })


const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
