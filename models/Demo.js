import mongoose from 'mongoose'
const demoSchema = new mongoose.Schema({
  name: String,
  type: String
})
const Demo = mongoose.model('Demo', demoSchema)

export default Demo