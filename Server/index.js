import dbConnect from './db/dbconnect.js';
import "dotenv/config";
import express from "express"
const app = express();
const port = process.env.PORT;
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Ecommerce API backend');
});

dbConnect().then(() => {
  app.listen(port, () => {
    console.log(`server is listening on ${port}`);
  })
}).catch((error) => {
  console.log(`Error connnecting to the database ${error}`)
})