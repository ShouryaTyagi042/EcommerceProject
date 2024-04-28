import { response } from "express";
import Product from "../models/product.js";

export const getProducts=async(req,res)=>{
    try{
       const products= await Product.find({}); 
       //to get all the data
       res.status(200).json(products);
    }
    catch(error){
        res.status(500).json(error.message)
    }
}






export const createNewProduct = async(req, res) => 
{
    try
    {
        let reqBody = req.body;
        console.log(reqBody);
        const {name, price, quantity, sellerMail, id } = reqBody;
        
        const product = await Product.create({name, price, quantity, sellerMail, id});
        console.log(product);

        res.status(201).send({product});
    }
    catch(error)
    {
        res.status(400).json({error: error.message});
    }
};

export const getProductsById = async(req, res) =>{
    try{
        const id = req.params.id;
        // console.log(id);
        const product = await Product.findOne({ 'id' : id })
        
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({ message : error.message })
        console.log(error.message);
    }
}


export const allProductsDetails=async(req,res)=>{
    try{
      console.log("userID",req.username)
      const allProducts=await Product.find()
      res.status(200).json({
        message : "All Products",
        data : allProducts,
        success : true,
        error : false
    })
    }catch(error){
      res.status(400).json({error:error.message})
    }
  }