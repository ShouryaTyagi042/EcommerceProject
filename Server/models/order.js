import mongoose from "mongoose";


const OrderSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    product:[{

        productID:{
            type:String,
            required:true,
            ref:"Product"
        },
        quantity: {
            type: Number,
            min: 1,
            default: 1,
            required: true,
        },
        name: { type: String, required: true },
        price: { type: Number, required: true },
    }],
    total_amount:{
        type:Number,
        required:true
    },
    timeofOrder: { 
        type: Date, default: Date.now 
    },
    isCancelled:{
        type:Boolean,
        default:false
    },
    paymentSettled: { 
        type: Boolean, default: false 
    }
})


const Order = mongoose.model("Order", OrderSchema);

export default Order;