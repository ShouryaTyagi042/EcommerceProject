import Seller from "../models/seller.js";
import { hashPassword } from "../utility/hashpass.js";
import { checkSeller } from "../services/seller.js";
import { genAuthToken } from "../utility/genToken.js";
import { findSeller } from "../services/seller.js";
export const createSeller = async (req, res) => {
    try {
      console.log(req.body);
      const { name, email, password,company_name,address, mobile } = req.body;
      if (await checkSeller(email)) throw new Error("user already exists");
      const pass = await hashPassword(password);
      const seller = await Seller.create({ name, email, password:pass, company_name,address, mobile });
      console.log(seller);
      res.status(201).send({ seller });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  export const loginSeller = async (req, res) => {
    try {
        const {email, password } = req.body;
        const seller = await findSeller(email, password);
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
  