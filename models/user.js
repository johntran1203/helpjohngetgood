//create a schema

//import from mongoose
const { Schema, model } = require('mongoose')

const user = new Schema(
  {
    name: { type: String, required:true },
    location: { type: String, required:true },
    url: { type: String, required:true }
  },
  { timestamps: true }
)

module.exports = model('User', user);