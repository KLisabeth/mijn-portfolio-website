import mongoose from "mongoose";

const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    maxlength: [15],
  },
  description: {
    type: String,
    required: true,
    minlength: [10],
  },

  git_hub: {
    type: String,
    required: true,
  },
  web_url: {
    type: String,
    required: true,
  },
});
const Project = mongoose.model("Project", projectSchema);
export default Project;
