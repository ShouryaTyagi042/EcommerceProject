import bcrypt from "bcrypt"
const saltRounds = 12;
export const hashPassword = async (password) => {
    return await bcrypt
        .hash(password, saltRounds)
}
export const checkPass = async (enteredPass, actualPass) => {
    return await bcrypt.compare(enteredPass, actualPass)
}