import mongoose from "mongoose";
import PostSchema from "../Schemas/Post";

const Post = mongoose.model("Post", PostSchema);

const PostCrudModel = {
  create, interview
};

async function create(attrs) {
  const entry = await Post.create(attrs);
  console.log("Insertion Completed");
  return entry;
}

async function interview() {
  const application = await Post.find({});
  console.log(application)
  console.log("fetched");
  return application;
}
export default PostCrudModel;
