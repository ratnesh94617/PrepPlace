import { ApplicationCrudModel } from ".";

const CQSet = {
  cquestions,
};

async function cquestions(attrs) {
  const { body } = attrs;
  console.log(attrs.body.CompanySheet[0]);
  const application = await ApplicationCrudModel.createCQSet({ ...body });
  return {
    application,
    message: "Company Question Set created",
  };
}
export default CQSet;
