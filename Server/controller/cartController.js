import Cart from "../models/cart.js";
export const createCart = async(req, res) => 
{
    try
    {
        let reqBody = req.body;
        console.log(reqBody);
        const {userId, productId, quantity, paymentStatus, checkoutTime } = reqBody;
        
        const cart = await Cart.create({userId, productId, quantity, paymentStatus, checkoutTime});
        console.log(cart);

        res.status(201).send({cart});
    }
    catch(error)
    {
        res.status(400).json({error: error.message});
    }
};