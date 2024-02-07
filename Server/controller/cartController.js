import Cart from "../models/cart.js";
import Product from "../models/product.js";

export const addToCart = async (req,res) => {
    try {
        const user = req.body.user.email;
        const { productId , quantity} = req.body;

        const cart = await Cart.findOne({ userId: user });
        if (!cart) throw new Error("User not found");

        const product = await Product.findById(productId);
        console.log(product);
        if (!product) throw new Error("Product was not found");

        cart.cartItems.push({ productId, quantity, name: product.name, price: product.price});

        console.log(cart.cartItems);
        
        //reduce is for taking collective sum, kinda like accumulate in cpp
        cart.total = cart.cartItems.reduce((acc, curr) => {
            return acc + curr.price * curr.quantity;
        }, 0);

        console.log(cart.total);
        await cart.save();
        res.status(201).send({ cart });
    } 
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

