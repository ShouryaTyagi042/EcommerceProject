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
    products: [
      {
        name: {
          type: String,
          required: true
        },
        description:{
            type:String,
            required:true
        },
        price: {
          type: Number,
          required: true
        },
        // Other product-related information can be added here
      }
    ],
    address: {
        type:String,
        required:true
    },
    company_name:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    }
  });
  
  const Seller = mongoose.model('Seller', sellerSchema);

  export default User;