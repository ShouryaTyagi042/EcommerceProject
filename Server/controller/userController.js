
import User from "../models/user"
export const createUser = async (req, res) => {
    try {
        console.log(req.body);
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password})
        console.log(user);
        res.status(201).send({ user })

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
