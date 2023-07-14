
import { PostCrudModel } from ".";

const PostDetails = {
  post_c,interview
};

async function post_c(attrs) {
  const { title, content } = attrs;
  console.log(attrs);
  if (content.length !== 0) {
    await PostCrudModel.create(attrs);
    const postAfterCreation = { message: "Experience published" };
    console.log(postAfterCreation);
    return postAfterCreation;
  }
  return {
    message: "Empty experience can't be published",
  };
}

async function interview() {
 // console.log(body);
  
  const application = await PostCrudModel.interview();
  console.log(application);
  
  return {
    application,
    message: "Posts fetched",
  };
}

export default PostDetails;
