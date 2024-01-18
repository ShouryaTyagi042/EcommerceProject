import User from "../models/user.js";

export const findUser = async (email, password) => {
    const user = await User.findOne({ email })
    if (!user) {
        throw new Error('User does not exist')
    }
    if(user.password!=password)
    {
        throw new Error("Incorrect passward")
    }
   
    return user
}

// export const checkUser = async (email) => {
//     const check = await User.findOne({ email });
//     if (check) return true;
//     return false
// }