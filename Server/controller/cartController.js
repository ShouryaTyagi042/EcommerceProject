import Cart from "../models/cart.js";
import Product from "../models/product.js";

export const addToCart = async (req,res) => {
    try 
    {
        const user = req.body.email;
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

    export const getItems = async (req, res) => {
        try {
            const cart = await Cart.findOne({ userId: req.body.email });
            const products = cart.cartItems; 

            res.status(200).send({ products });
        } 
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    };
    
    export const deleteItem = async (req, res) => {
        try 
        {
            const { productId } = req.body;
            const cart = await Cart.findOne({ userId: req.body.email }); 

            let productFound = false;
            cart.cartItems.forEach((product) => { 
                if (product.productId.toString() == productId) {
                    productFound = true;
                    //splice -> here the 1 means delete 1 element at the index of product
                    cart.cartItems.splice(cart.cartItems.indexOf(product), 1); 
                    cart.total -= product.price * product.quantity; 
                }
            });

            if (!productFound) throw new Error("Product was not found");
            await cart.save();
            res.status(200).send("Product deleted from cart");
        } 
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    };
    
    export const emptyCart = async (req, res) => {
        try 
        {
            if (!req.body.user.role.includes("user")) res.status(400).send("Only user can access this route");
            const cart = await Cart.findOne({ userId: req.body.user.email }); 
            cart.cartItems = []; 
            cart.total = 0; 
            await cart.save();
            res.status(200).send("Emptied the cart");
        } 
        catch (error) {
            res.status(400).send(error);
        }
    };


