const mongoose = require("mongoose")
const Schema = mongoose.Schema


const todoSchema = new Schema(
    {
      userId: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        max: 500,
      }, 
  
      complete: {
        type: Boolean,
        default: false
      }
      
  }
  );

module.exports = mongoose.model("todo", todoSchema);