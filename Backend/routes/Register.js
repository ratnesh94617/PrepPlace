import mongoose from "mongoose";
import Express from "express";
import { PostController } from "../controller";
import { ApplicationController } from "../controller";
import { QuestionController } from "../controller";
import ProfileSchema from "../Schemas/ProfilePic";
// import { ProfileController,upload } from '../controller'
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";
const Profile = mongoose.model("Profile", ProfileSchema);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(req.body.email);
    cb(null, "../Frontend/src/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

// const fileFilter = (req, file, cb) => {
//   const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
//   if (allowedFileTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

let upload = multer({ storage: storage });

const RegisterLoginRouter = new Express.Router();

const { register, logIn, lids } = ApplicationController;
const { question, questionSet, ques } = QuestionController;
const { post_c, interview } = PostController;
// const {upload_pic}=ProfileController
RegisterLoginRouter.post("/Register", register);
RegisterLoginRouter.post("/LogIn", logIn);
RegisterLoginRouter.post("/Question", question);
RegisterLoginRouter.get("/Ques", ques);
RegisterLoginRouter.get("/QuestionSet/:id", questionSet);
RegisterLoginRouter.get("/interview", interview);
RegisterLoginRouter.get("/lids", lids);
RegisterLoginRouter.post("/Post", post_c);
RegisterLoginRouter.post(
  "/profile",
  upload.single("photo"),
  async (req, res, next) => {
    const email = req.body.email;
    console.log("body: ");
    console.log(req.body);
    const photo = req.file.filename;
    console.log(photo);
    // const entry = await Profile.create(email, pic);
    const data = {
      email,
      photo
    };
    console.log(data);
    const newUser = new Profile(data);
    newUser
      .save()
      .then(() => res.json("Pic Added"))
      .catch((err) => res.status(400).json("Error" + err));
    // console.log(entry);
    // return entry;
  }
);

RegisterLoginRouter.get("/pic", (req, res) => {
  const app=Profile.find({}, (err, items) => {
    if(err) {
      console.log(err);
      res.status(500).send('An error occured', err);
    }
    else {
      res.send(items);
    }
  });
  return app;
});

export default RegisterLoginRouter;
