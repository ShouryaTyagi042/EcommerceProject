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
  // balance:{
  //   type:Number,
  //   default:10000
  // },
  // address: {
  //   type: String,
  //   required: true,
  // },
  phone: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
