import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import adminRoute from './backend/routes/adminRoute.js';
import profileRoute from './backend/routes/profileRoute.js';
import projectRoute from './backend/routes/projectRoute.js';
import blogRoute from './backend/routes/blogRoute.js';
import messageRoute from './backend/routes/messageRoute.js';
import path from "path"
import bodyParser from 'body-parser'
import uploadRouter from './backend/routes/uploadRoute.js';
dotenv.config();
const app = express();

//Mongo Db
const db = process.env.MDB_URL;
mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.log(error.reason));
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/admin", adminRoute);
app.use("/api/profile", profileRoute);
app.use("/api/project", projectRoute);
app.use("/api/blog", blogRoute);
app.use("/api/uploads", uploadRouter)
app.use ("/api/message", messageRoute)

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));


if(process.env.NODE_ENV === 'production'){
  app.use(express.static('frontend/build'))
  app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
}

const port = process.env.PORT;

app.listen(port, () => console.log(`Server started on port ${port}`));