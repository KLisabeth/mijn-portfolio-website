import express from "express";
import multer from 'multer'

const uploadRoute = express.Router();

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'uploads/'); 
  }, 
  filename: function(req, file, cb){
      cb(null, file.originalname, `${Date.now()}`); 
  }
}); 

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype == "image/jpg") {
    cb(null, true);
      } else {
          cb(null, false);
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
};

const upload = multer({storage: storage, limits: {
  fileSize: 1024 * 1024 * 5 
  }, 

  fileFilter: fileFilter
});

uploadRoute.post('/', upload.single('image'), (req, res) => {
    res.send(`/${req.file.path}`);
  });
  
export default uploadRoute;