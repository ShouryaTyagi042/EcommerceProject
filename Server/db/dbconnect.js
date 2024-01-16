const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
const uri = process.env.MONG0_URI
async function dbConnect() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(uri);
    console.log("Connected to MongoDB !\n");
  } catch (error) {
    throw error;
  }
}
module.exports={dbConnect}