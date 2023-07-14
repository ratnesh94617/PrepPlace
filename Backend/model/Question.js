import { ApplicationCrudModel } from ".";

const QuestionSet = {
  question,
  ques,
  questionSet,
};

async function question(attrs) {
  const { body } = attrs;
  console.log(attrs.body.QuestionSheet[0]);
  const application = await ApplicationCrudModel.createQuestionSet({ ...body });
  return {
    application,
    message: "Question Set created",
  };
}

async function ques(attrs) {
  const application = await ApplicationCrudModel.questionSet();
  return {
    application,
    message: "Questions fetched",
  };
}

async function questionSet(params) {
  console.log(params);
  const { id: requiredTopic } = params;
  const application = await ApplicationCrudModel.questionSet();
  console.log(application);
  const { QuestionSheet } = application[0];
  let requiredData = [];
  for (let i = 0; i < QuestionSheet.length; i++) {
    if (QuestionSheet[i].Topic === requiredTopic) {
      requiredData.push(QuestionSheet[i]);
    }
  }
  return {
    requiredData,
    message: "Question Set fetched",
  };
}
export default QuestionSet;
