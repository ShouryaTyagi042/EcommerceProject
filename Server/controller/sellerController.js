import Seller from "../models/seller.js";

export const createSeller = async (req, res) => {
    try {
      console.log(req.body);
      const { name, email, password,company_name,address, mobile } = req.body;
      const seller = await Seller.create({ name, email, password, company_name,address, mobile });
      console.log(seller);
      res.status(201).send({ seller });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  