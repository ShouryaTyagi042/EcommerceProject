import User from "../models/user.js";
import { findUser } from "../services/user.js";
import { genAuthToken } from "../utility/genToken.js";
export const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password, address, mobile } = req.body;
    const user = await User.create({ name, email, password, address, mobile });
    console.log(user);
    res.status(201).send({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
      const { name, email, password } = req.body;
      const user = await findUser(email, password);
      console.log(user)
      const token = genAuthToken(name, email);
      console.log(user)
      res.status(200).send({ user, token })
  } catch (error) {
      res.status(401).json({ error: error.message });
  }
}

