import Order from "../models/order.js";
import User from "../models/user.js";
import Cart from "../models/cart.js";


export const createOrder = async (req, res) => {
    try {
        const userEmail = req.body.email;
        const owner = await User.findOne({ email: userEmail});
        console.log(owner)
        if (!owner) throw new Error("No user found")
        const cart = await Cart.findOne({ userId: userEmail });
        console.log(cart)
        if (cart.cartItems.length == 0) throw new Error("Cart is empty")
        const order = await Order.create({ name: user.name, email: user.email, products: cart.cartItems,total_amount:cart.bill})//get the bill from cart schema for further checks
    //make the product schema for the cart and order same
        cart.cartItems = [];
        await owner.save();
        await cart.save();
        res.status(201).send({ order })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}