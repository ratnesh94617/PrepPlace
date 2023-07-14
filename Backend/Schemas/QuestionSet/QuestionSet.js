import mongoose from 'mongoose'
import QSchema from './QSchema'
const Schema = mongoose.Schema
const QuestionSetSchema = new Schema({
    QuestionSheet:{type: [QSchema], default: []}

})
export default QuestionSetSchema
