import dbConnect from "./db/dbconnect.js"; //imported dbConnect
import "dotenv/config";
import express from "express";
import userRoute from "./routes/userRoute.js";
import sellerRoute from "./routes/sellerRoute.js"
import productRoute from "./routes/productRoute.js";
import orderRoute from "./routes/orderRoute.js";
import cartRoute from "./routes/cartRoute.js";
import  { paymentSettled } from "./services/paymentSettled.js"
import DefaultData from "./default.js";
import cors from "cors"




const app = express();
const port = process.env.PORT;


app.use(cors())
app.use(express.json());
app.use(userRoute);
app.use(sellerRoute);
app.use(productRoute);
app.use(orderRoute);
app.use(cartRoute);
app.get("/", (req, res) => {
  res.send("Ecommerce API backend");
});

dbConnect()
  .then(() => {
    app.listen(port, () => {
      console.log(`server is listening on ${port}`);
    });
  })
  .catch((error) => {
    console.log(`Error connnecting to the database ${error}`);
  });

  DefaultData()

  paymentSettled