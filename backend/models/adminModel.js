import mongoose from "mongoose";
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  name: { type: String },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/,
    unique: true,
    dropDups: true,
  },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
});
const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
