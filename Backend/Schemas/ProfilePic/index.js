import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ProfileSchema = new Schema({
  email: { type: String },
  photo:{type:String}
})
export default ProfileSchema