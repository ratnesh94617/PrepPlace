import mongoose from 'mongoose'
import CQSchema from './CQSchema'

const Schema = mongoose.Schema
const CQSetSchema = new Schema({
    CompanySheet:{type:[CQSchema], default:[]}
 
})
export default CQSetSchema 
