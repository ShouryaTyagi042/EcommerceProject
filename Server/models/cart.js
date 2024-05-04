import mongoose from "mongoose";
// include a bill/total amount section
//include price section for each individual item added in the cart
const cartItemsSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    min: 1,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const cartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    default: "seller1@gmail.com"
  },
  cartItems: {
    type: [cartItemsSchema],
    required: true,
  },
  total: {
    type: Number,
    default: 0,
  }
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
