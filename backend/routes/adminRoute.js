import express from "express";
import Admin from "../models/adminModel.js";
import bcrypt from "bcryptjs";
import { getToken } from "../config/utils.js";

const adminRoute = express.Router();


adminRoute.get("/createadmin", async (req, res) => {
  try {
    const admin = new Admin({
      name: process.env.NAME,
      email: process.env.EMAIL,
      password: bcrypt.hashSync(process.env.ADMIN, 8),
      isAdmin: true,
    });
    const newAdmin = await admin.save();
    res.send(newAdmin);
  } catch (error) {
    res.send({ msg: error.message });
  }
});

adminRoute.post( "/signin", async (req, res) => {
  try {
    const signinAdmin = await Admin.findOne({
      email: req.body.email,
    });
    if (signinAdmin && bcrypt.compareSync(req.body.password, signinAdmin.password)) {
        res.send({
          _id: signinAdmin.id,
          name: signinAdmin.name,
          isAdmin: signinAdmin.isAdmin,
          token: getToken(signinAdmin),
        });
        return
      }
     } catch (error) {
    res.send({message: "You are not an admin" || error.message });
  }
  });

export default adminRoute;
