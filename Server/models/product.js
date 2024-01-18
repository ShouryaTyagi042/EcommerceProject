import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    sellerId: {
        //got this type from ChatGPT, not sure which is correct
        
        // type: mongoose.Schema.Types.ObjectId,
        //ref: 'Seller', // Assuming there is a User model for sellers
      type: String,  
      required: true,
    },
});

const Product = mongoose.model("Product", productSchema);
export default Product;