import User from "../models/user.js";
import Cart from "../models/cart.js";
import { findUser } from "../services/user.js";
import { genAuthToken } from "../utility/genToken.js";
import { checkUser } from "../services/user.js";
import { hashPassword } from "../utility/hashpass.js";
// >>>>>>> main

export const Userdetail=async(req,res)=>{
try{
  const UserData=await User.findOne(req.username)
  res.json({
    data :UserData,
    success : true,
})
}catch(error)
{
  res.status(400).json({
    message : error.message,
    error : true,
    success : false
  })
}
}

export const createUser = async (req, res) => {
  try {
    console.log(req.body);
    const { firstname,lastname,username,email, password,  phone } = req.body;
    
    if (await checkUser(email)) throw new Error("user already exists");
    const role="GENERAL";
    const pass = await hashPassword(password);
    const user = await User.create({ firstname,lastname,username, email, password:pass, phone});
    
    // const userId = user._id;  //ftching the unique id of each user
    // rather than id, we are using email
    const userId = email;
    console.log(user);
    await createCart(userId);
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
      const {username, password } = req.body;
      const user = await findUser(username, password);
      if (user) {
        // Create a new session and store user data
        req.session.firstname = user.firstname
      console.log(req.session.firstname)
      const token = genAuthToken(user._id,user.firstname);
      
      console.log(user)
      res.status(200).send({ user, token })
  }} catch (error) {
      res.status(401).json({ error: error.message });
  }
}

export const logoutUser = async (req, res) => {
  try {
      const msg = "Logout successful"
      res.status(200).send(msg)
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
}

export const allUserDetails=async(req,res)=>{
  try{
    console.log("userID",req.username)
    const allUsers=await User.find()
    res.status(200).json({
      message : "All User ",
      data : allUsers,
      success : true,
      error : false
  })
  }catch(error){
    res.status(400).json({error:error.message})
  }
}

export const updateUser=async(req,res)=>{
  try{
    const {firstname,lastname,email,userID,role}=req.body
    const payload={
      ...(firstname &&{firstname:firstname}),
      ...(lastname &&{lastname:lastname}),
      ...(email&&{email:email}),
      ...(role &&{role:role}),
    }
    const updateUser=await User.findByIdAndUpdate(userID,payload)
    res.status(200).json({
      message:"User Updated",
      data:updateUser,
      success:true
    })

  }catch(error){
      res.send(401).json({
        message:error.message
      })
  }
}

export const ProfileDisplay=(req,res)=>{
  try{
    if (req.session.user) {
      // The user is logged in, you can access the user's data from the session
      const { firstname } = req.session.firstname;
    return res.json({valid:true,firstname:firstname})
    }
  else
  return res.json({valid:false})
  }
  catch(error){
    res.send(401).json({
      message:error.message
    })
  }
}