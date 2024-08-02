import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    trim:true,
  },
  lastname:{
    type:String,
    required:true,
    trim:true,
  },
  username:{
    type:String,
    required:true,
    trim:true,
    unique:true,
    index:true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim:true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  role:{
    type:String,
    default:"GENERAL"
  },
  createdAt: {
    type: Date,
    default: Date.now ,// Automatically set the current date and time on user creation
    timezone: '+0530'
  }
});

const User = mongoose.model("User", userSchema);

export default User;
