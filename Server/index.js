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
import session from "express-session";
import cookieParser from "cookie-parser";




const app = express();
const port = process.env.PORT;

app.use(session({
  secret:"secret",
  resave:false,
  saveUninitialized:false,
  cookie:{
    secure:false,
    maxAge:1000*60*60*24 //time after which the cookie will be unset here it is one day
  }
}))
app.use(cookieParser())
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