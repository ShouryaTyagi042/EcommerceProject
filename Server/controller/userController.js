import User from "../models/user.js";
import Cart from "../models/cart.js";
import { findUser } from "../services/user.js";
import { genAuthToken } from "../utility/genToken.js";
import { checkUser } from "../services/user.js";
import { hashPassword } from "../utility/hashpass.js";
// >>>>>>> main
export const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password, address, mobile } = req.body;
    
    if (await checkUser(email)) throw new Error("user already exists");
    const pass = await hashPassword(password);
    const user = await User.create({ name, email, password:pass, address, mobile });
    
    const userId = user._id;  //ftching the unique id of each user
    console.log(user);
    createCart(userId);

    res.status(201).send({ user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//
export const createCart = async(userId) => 
{
    try
    {       
        const cart = await Cart.create({
          userId,
          cartItems : [],
        });
        console.log("Cart created successfully", cart);
    }
    catch(error)
    {
        console.log("Error creating cart", error);
    }
};
// =======
export const loginUser = async (req, res) => {
  try {
      const {email, password } = req.body;
      const user = await findUser(email, password);
      console.log(user)
      const token = genAuthToken(user._id);
      console.log(user)
      res.status(200).send({ user, token })
  } catch (error) {
      res.status(401).json({ error: error.message });
  }
}

// >>>>>>> main
