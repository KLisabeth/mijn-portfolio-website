import express from "express";
import Project from "../models/projectModel.js";


const projectRoute = express.Router();

projectRoute.get("/", async (req, res) => {
  const project = await Project.find({});
  res.status(200).json(project);
});

projectRoute.get("/:id", async (req, res) => {
  const projectId = req.params.id;
  const project = await Project.findById(projectId);
  if (project) {
    res.status(200).send(project);
  } else res.status(404).json({ message: "Error in finding this project" });
});

projectRoute.post("/", async (req, res) => {
  try {
    const newProject = new Project({
      title: req.body.title,
      description: req.body.description,
      git_hub: req.body.git_hub,
      web_url: req.body.web_url
    });
    const savedProject = await newProject.save();
    if (savedProject) {
      return res
        .status(200)
        .json({ message: "New project has been created", project: savedProject });
    }
  } catch (err) {
    res.status(400).json({ message: "Error in creating project" });
  }
});

projectRoute.put("/:id", async (req, res) => {
  const projectId = req.params.id;
  const project = await Project.findById(projectId);
  if (project) {
    project.title = req.body.title;
    project.description = req.body.description;
    project.git_hub = req.body.git_hub;
    project.web_url = req.body.web_url;
    const updatedProject = await project.save();
    if (updatedProject) {
      return res
        .status(200)
        .send({ message: "Project has been Edited", project: updatedProject });
    }
  }
  return res.status(500).send({ message: "Error in editing this project" });
});

projectRoute.delete("/:id", async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (project) {
    const deleteProject = await project.deleteOne();
    res.send({ message: "Project Deleted", project: deleteProject });
  } else {
    res.status(404).send({ message: "Project Not Found" });
  }
});

export default projectRoute;
