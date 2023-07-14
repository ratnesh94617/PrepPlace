"use strict";
import { QuestionSet } from "../model";

const QuestionController = {
question,
ques,
questionSet
};

async function question(req, res, next) {
  const { body } = req;
  const data = await QuestionSet.question(body);
  console.log(data);
  return res.send(data);
}

async function ques(req, res, next) {
  const { body } = req;
  const data = await QuestionSet.ques(body);
  console.log(data);
  return res.send(data);
}

async function questionSet(req, res, next) {
  const {params}=req
  console.log(params);
  const data = await QuestionSet.questionSet(params);
  console.log(data);
  return res.send(data);
}

export default QuestionController;
