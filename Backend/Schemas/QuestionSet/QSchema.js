import mongoose from 'mongoose'

const Schema = mongoose.Schema
const QSchema = new Schema({
    Topic: { type: String },
    Problem: { type: String },
    Done:  { type: String },
    URL: { type: String }
})
export default QSchema 
