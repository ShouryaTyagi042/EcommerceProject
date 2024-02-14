import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    company_name:{
        type:String,
        required:true
    },
    address: {
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    balance:{
      type:Number
    }
  });
  
  const Seller = mongoose.model('Seller', sellerSchema);

  export default Seller;