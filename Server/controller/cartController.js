import Cart from "../models/cart.js";
import User from "../models/user.js";
import Product from "../models/product.js";

export const addToCart = async (req,res) => {
    try 
    {
        const mail = req.params.mail;
        const productId = req.params.id;

        console.log("this is the mail " + mail);
        console.log("this is the product id " + productId);

        const cart = await Cart.findOne({ userId: mail });
        const user = await User.findOne({ email: mail})
        if (!cart) throw new Error("User not found");

        const product = await Product.findOne({id : productId});
        console.log(product);
        if (!product) throw new Error("Product was not found");

        cart.cartItems.push({ productId, quantity: 1, name: product.title.shortTitle, price: product.price.mrp});

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
            const mail = req.params.mail;
            const cart = await Cart.findOne({ userId: mail });
            const user = await User.findOne({
                email: mail,
            });
            console.log("This is getItems of cart controller " + user);

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


