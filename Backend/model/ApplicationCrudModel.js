import mongoose from "mongoose";
import ApplicationSchema from "../Schemas/Application";
import { QuestionSetSchema } from "../Schemas/QuestionSet";

const Application = mongoose.model("Application", ApplicationSchema);
const Question = mongoose.model("Question", QuestionSetSchema);

const ApplicationCrudModel = {
  create,
  findByEmail,
  searchUsers,
  createQuestionSet,
  questionSet,
  edit,
  append,
  remove,
  lids,
  checked,
  unchecked,
};

async function checked(id, email, topic) {
  const application = await Application.findOne({ email });
  var f = 1;
  for (var i = 0; i < application.check.length; i++) {
    if (application.check[i].id == id) {
      f = 0;
      break;
    }
  }

  if (f == 1) {
    application.check.push({ id, topic });
    await application.save();
    console.log("Checked!");
    return application;
  } else console.log("Already checked!!");
}

async function unchecked(id, email, topic) {
  const application = await Application.findOne({ email });
  console.log("hello");
  for (var i = 0; i < application.check.length; i++) {
    if (application.check[i].id === id) {
      // console.log(i);
      // var index = application.check.id.indexOf(id);
      // console.log(index);
      application.check.splice(i, 1);
      await application.save();
      console.log("Unchecked successfully!");
      return application;
    } else console.log("Checked not present!!");
  }
  /*
  if (application.check.includes(id)) {
    console.log(index);
    var index = application.check.id.indexOf(id);
    console.log(index);
    application.check.splice(index, 1);
    await application.save();
    console.log("Unchecked successfully!");
    return application;
  } else console.log("Checked not present!!");*/
}

async function lids() {
  const application = await Application.find({});
  console.log(application);
  console.log("fetched");
  return application;
}

async function create(attrs) {
  attrs.bookmark = [];
  const application = await Application.create(attrs);
  console.log("Creation Completed");
  return application;
}

async function append(id, email) {
  const application = await Application.findOne({ email });
  // const res = await Application.updateOne({ email: email }, { bookmark: id });
  // const application = await Application.create(attrs);
  if (!application.bookmark.includes(id)) {
    application.bookmark.push(id);
    await application.save();
    console.log("Added Successfully!");
    return application;
  }
}

async function edit(email, password, linkedinId, GithubId, change) {
  const app = await Application.findOne({ email });

  if (change == 1) {
    await Application.updateOne({ "email": email },
      { $set: { "githubId": GithubId, "password": password } });
    await Application.updateOne({ "email": email },
      { $set: { "linkedInId": linkedinId } });
  }
  else {
    await Application.updateOne({ "email": email },
      { $set: { "githubId": GithubId } });
    await Application.updateOne({ "email": email },
      { $set: { "linkedInId": linkedinId } });
  }
  const application = await Application.findOne({ email });
  console.log(application);
  return application;
}

async function remove(id, email) {
  const application = await Application.findOne({ email });
  // const res = await Application.updateOne({ email: email }, { bookmark: id });
  // const application = await Application.create(attrs);
  if (application.bookmark.includes(id)) {
    var index = application.bookmark.indexOf(id);
    application.bookmark.splice(index, 1);
    await application.save();
    console.log("Deleted Successfully!");
    return application;
  }
}

async function findByEmail(email) {
  const application = await Application.findOne({ email });
  console.log("Creation Completed");
  return application;
}

async function searchUsers(attrs) {
  console.log(attrs);
  const application = await Application.find(attrs);
  console.log("Creation Completed");
  return application;
}

async function createQuestionSet(attrs) {
  const application = await Question.create(attrs);
  console.log("Creation Completed");
  return application;
}

async function questionSet() {
  const application = await Question.find({});
  console.log(application);
  console.log("Questions fetched");
  return application;
}

export default ApplicationCrudModel;
