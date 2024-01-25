import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: "User",
    type: String,
    required: true,
  },
  productId: {
    // type: mongoose.Schema.Types.ObjectId,
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  paymentSettled: {
    type: Boolean,
    default: false,
  },
  checkoutTime: {
    type: Date,
    default: Date.now,
  },
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
