import dbConnect from "./db/dbconnect.js"; //imported dbConnect
import "dotenv/config";
import express from "express";
import userRoute from "./routes/userRoute.js";
import sellerRoute from "./routes/sellerRoute.js"
import productRoute from "./routes/productRoute.js";
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRoute);
app.use(sellerRoute);
app.use(productRoute);

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
