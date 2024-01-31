import mongoose from "mongoose";


const OrderSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        ref: "user",
        required:true
    },
    product:[{

        productID:{
            type:String,
            required:true,
            ref:"products"
        },
        price: { type: Number, required: true },
        name: { type: String, required: true },
        quantity: {
            type: Number,
            min: 1,
            default: 1,
            required: true,
        },
    }],
    total_amount:{
        type:Number,
        required:true
    },
    timeofOrder: { 
        type: Date, default: Date.now 
    },
})


const Order = mongoose.model('Order', OrderSchema);

export default Order;