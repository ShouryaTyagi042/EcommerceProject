import Seller from "../models/seller.js"
import { checkPass } from "../utility/hashpass.js"
// import { hashPassword } from "../utility/hashpass.js"
export const findSeller = async (email, password) => {
    const seller = await Seller.findOne({ email })
    if (!seller) {
        throw new Error('Seller does not exist')
    }
    const isMatch = await checkPass(password, seller.password)
    console.log(isMatch)
    if (!isMatch) {
        throw new Error('Incorrect password')
    }
   
    return seller
}

export const checkSeller = async (email) => {
    const check = await Seller.findOne({ email });
    if (check) return true;
    return false
}