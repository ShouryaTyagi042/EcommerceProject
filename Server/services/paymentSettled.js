import Order from "../models/order.js";
import User from "../models/user.js";
import "dotenv/config";
import Product from "../models/product.js";
import Seller from "../models/seller.js";

import cron from "node-cron"//Automatic task scheduller

export const paymentSettled=cron.schedule('0 23 * * *', async () => {
    try {
       sellerPayment,
       cancelledOrder
    } catch (error) {
      console.error('Error processing settled orders:', error);
    }
  },{
    scheduled:true,
    timezone: "Asia/Kolkata"
  });

  const sellerPayment=async ()=> {
    var pointer=await Order.find({paymentSettled:false})//Getting all the orders whose payment has not been settled till 11pm
    pointer.forEach(async(order)=>{   //extracting each order from the list
        const products=order.products 
        products.forEach(async(product)=>{ //get products for each order
            const productInfo = await Product.findById(product.productID) 
            const seller = await Seller.findOne({ email: productInfo.sellerMail })//Finding the seller from the product id associated 
            console.log(seller);
            //Calculating the payment to be made to the seller
            seller.balance += (product.price * product.quantity) * 0.8;//Assuming some the money is deducted as platform usage charge
            console.log(seller.balance);
            await seller.save();
        })
        order.paymentSettled=true;
        await order.save();
    })
  }


  const cancelledOrder = async () => {
    var pointer = await Order.find({ isCancelled: true })
    pointer.forEach(async (order) => {
        if (!order.paymentSettled) {
            const owner = await User.findOne({ email: order.email });
            owner.balance += order.total_amount;
            await owner.save();
            await Order.deleteOne({ _id: order._id });
        }
    })

}