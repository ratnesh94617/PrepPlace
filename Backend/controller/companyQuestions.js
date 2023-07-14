"use strict";
import { CQSet } from "../model";

const CQController = {
  cquestions,
};

async function cquestions(req, res, next) {
  const { body } = req;
  const data = await CQSet.cquestions(body);
  console.log(data);
  return res.send(data);
}

export default CQController;
