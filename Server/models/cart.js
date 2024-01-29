import mongoose from "mongoose";

const cartItemsSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const cartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  cartItems: {
    type: [cartItemsSchema],
    required: true,
  },
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
