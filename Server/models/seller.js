import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
    firstname: {
      type: String,
      required: true
    },
    lastname:{
      type:String,required:true
    },
    username:{
      type:String,required:true
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
    Companyname:{
        type:String,
        required:true
    },
    GST_number:{
      type:String,required:true,unique:true
    },
    address: {
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
  });
  
  const Seller = mongoose.model('Seller', sellerSchema);

  export default Seller;