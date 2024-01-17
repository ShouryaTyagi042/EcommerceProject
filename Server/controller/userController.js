import User from "../models/user.js";
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
