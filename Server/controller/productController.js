import { response } from "express";
import Product from "../models/product.js";

export const getProducts=async(req,res)=>{
    try{
       const products= await Product.find({}); 
       //to get all the data
       res.status(200).json(products);
    }catch(error){
        res.status(500).json(error.message)
    }
}




export const createNewProduct = async(req, res) => 
{
    try
    {
        let reqBody = req.body;
        console.log(reqBody);
        const {name, price, quantity, sellerMail } = reqBody;
        
        const product = await Product.create({name, price, quantity, sellerMail});
        console.log(product);

        res.status(201).send({product});
    }
    catch(error)
    {
        res.status(400).json({error: error.message});
    }
};