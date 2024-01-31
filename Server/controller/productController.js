import Product from "../models/product.js";
export const createNewProduct = async(req, res) => 
{
    try
    {
        let reqBody = req.body;
        console.log(reqBody);
        const {name, cost, quantity, sellerId } = reqBody;
        
        const product = await Product.create({name, cost, quantity, sellerId});
        console.log(product);

        res.status(201).send({product});
    }
    catch(error)
    {
        res.status(400).json({error: error.message});
    }
};