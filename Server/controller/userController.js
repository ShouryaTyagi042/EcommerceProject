import User from "../models/user.js";
import Cart from "../models/cart.js";

export const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password, address, mobile } = req.body;
    const user = await User.create({ name, email, password, address, mobile });

    const userId = user._id;  //ftching the unique id of each user

    console.log(user);
    createCart(userId);

    res.status(201).send({ user });
    

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const createCart = async(userId) => 
{
    try
    {       
        //cart, at this stage, contains userID and an empty array for future purchases
        const cart = await Cart.create({
          userId,
          cartItems : [],
        });
        console.log("Cart created successfully", cart);

        // res.status(201).send({cart});
    }
    catch(error)
    {
        console.log("Error creating cart", error);
        // res.status(400).json({error: error.message});
    }
};
