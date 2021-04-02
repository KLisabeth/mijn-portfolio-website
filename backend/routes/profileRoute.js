import express from "express";
import Profile from "../models/profileModel.js";


const profileRoute = express.Router();

profileRoute.get("/", async (req, res) => {
  const profile = await Profile.find({});
  res.status(200).json(profile);
});

profileRoute.get("/:id", async (req, res) => {
  const profileId = req.params.id;
  const profile = await Profile.findById(profileId);
  if (profile) {
    res.status(200).send(profile);
  } else res.status(404).json({ message: "Error in finding this profile" });
});

profileRoute.post("/", async (req, res) => {
  try {
    const newProfile = new Profile({
      image: req.body.image,
      cv_url: req.body.cv_url,
      bio: req.body.bio,
      git_hub_url: req.body.git_hub_url,
      twitter_url: req.body.twitter_url,
      linked_in_url: req.body.linked_in_url,
      instagram_url: req.body.instagram_url
    });
    const savedProfile = await newProfile.save();
    if (savedProfile) {
      return res
        .status(200)
        .json({ message: "New profile has been created", profile: savedProfile });
    }
  } catch (err) {
    res.status(400).json({ message: "Error in creating profile" });
  }
});

profileRoute.put("/:id", async (req, res) => {
  const profileId = req.params.id;
  const profile = await Profile.findById(profileId);
  if (profile) {
    profile.image = req.body.image;
    profile.cv_url = req.body.cv_url;
    profile.bio = req.body.bio;
    profile.git_hub_url = req.body.git_hub_url;
    profile.twitter_url = req.body.twitter_url;
    profile.linked_in_url= req.body.linked_in_url;
    profile.instagram_url= req.body.instagram_url;
   
    const updatedProfile = await profile.save();
    if (updatedProfile) {
      return res
        .status(200)
        .send({ message: "Profile has been Edited", profile: updatedProfile });
    }
  }
  return res.status(500).send({ message: "Error in editing this profile" });
});

profileRoute.delete("/:id", async (req, res) => {
  const profile = await Profile.findById(req.params.id);
  if (profile) {
    const deleteProfile = await profile.deleteOne();
    res.send({ message: "Profile Deleted", profile: deleteProfile });
  } else {
    res.status(404).send({ message: "Profile Not Found" });
  }
});

export default profileRoute;
