import User from "../models/user.js";
import { checkPass } from "../utility/hashpass.js";
export const findUser = async (email, password) => {
    const user = await User.findOne({ email })
    if (!user) {
        throw new Error('User does not exist')
    }
    const isMatch = await checkPass(password, user.password)
    console.log(isMatch)
    if (!isMatch) {
        throw new Error('Incorrect password')
    }
   
    return user
}

export const checkUser = async (email) => {
    const check = await User.findOne({ email });
    if (check) return true;
    return false
}