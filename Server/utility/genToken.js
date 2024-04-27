import "dotenv/config"
import jsonwebtoken from "jsonwebtoken"
export const genAuthToken = (name, email) => jsonwebtoken.sign({ name, email}, `${process.env.JWT_SECRET}`) 