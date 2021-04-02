import mongoose from "mongoose";

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  image:{
    type: String,
    required: true,
  },
  cv_url: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
    maxlength: [510],
  },
  git_hub_url: {
    type: String,
    required: true,
  },
  twitter_url: {
    type: String,
    required: true,
  },
  linked_in_url: {
    type: String,
    required: true,
  },
  instagram_url: {
    type: String,
    required: true,
  },
});

const Profile = mongoose.model("Profile", profileSchema);
export default Profile;
