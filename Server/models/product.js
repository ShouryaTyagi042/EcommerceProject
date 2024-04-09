import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id:{
      type:String,
      required:true,
      unique:true,
    },
    url:String,
    detailural:String,
    title:Object,
    price:Object,
    quantity:Number,
    description:String,
    discount:String,
    tagline:String
    
    // sellerMail: {
    //   type: String,
    //   require: true,
    // },

    // Can replace sellerMail with sellerID in the future
    // sellerId: {
        // got this type from ChatGPT, not sure which is correct
         // type: mongoose.Schema.Types.ObjectId,
         //ref: 'Seller', // Assuming there is a User model for sellers
    //   type: String,  
    //   required: true,
    // },
});

const Product = mongoose.model("Product", productSchema);
export default Product;