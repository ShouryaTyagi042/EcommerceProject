import Seller from "../models/seller.js";
import { hashPassword } from "../utility/hashpass.js";
import { checkSeller } from "../services/seller.js";
import { genAuthToken } from "../utility/genToken.js";
import { findSeller } from "../services/seller.js";
export const createSeller = async (req, res) => {
    try {
      console.log(req.body);
      const { firstname, lastname,username,email,password,Companyname,GST_number,address, phone } = req.body;
      if (await checkSeller(email)) throw new Error("user already exists");
      const pass = await hashPassword(password);
      const seller = await Seller.create({ firstname, lastname,username,email,password:pass,Companyname,GST_number,address, phone });
      console.log(seller);
      res.status(201).send({ seller });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  export const loginSeller = async (req, res) => {
    try {
        const {username, password } = req.body;
        const seller = await findSeller(username, password);
        console.log(seller)
        const token = genAuthToken(seller._id);
        console.log(seller)
        res.status(200).send({ seller, token })
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
  }
  
  export const logoutSeller = async (req, res) => {
    try {
        const msg = "Logout successful"
        res.status(200).send(msg)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  }
  

  export const allSellerDetails=async(req,res)=>{
    try{
      console.log("userID",req._id)
      const allSeller=await Seller.find()
      res.status(200).json({
        message : "All Seller ",
        data : allSeller,
        success : true,
        error : false
    })
    }catch(error){
      res.status(400).json({error:error.message})
    }
  }