import { products } from "./constants/Data.js"

import Product from "./models/product.js"

const DefaultData =async()=>{
    try{
        await Product.deleteMany({});
       await Product.insertMany(products);
        console.log("Data imported Successfully")
    }catch(error){
        console.log(error.message)
    }
}

export default DefaultData;