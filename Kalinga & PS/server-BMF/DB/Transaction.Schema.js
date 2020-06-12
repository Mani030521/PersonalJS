const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PurchasedSchema = new Schema({        
    UId: { type: String },
    Product:[ {
     productId :   { type: String, required: true },
    
    quantity : {
        type:String,required:true
    },
    price:{
            type:String,required:true
        },
     Title:{
         type:String,required:true
    },
    Image:{
        type:String,required:true
    }
        }],
    totalamount: { type: Number },
    TotalQuantity :{type:Number,required:true},
    date: { type: Date, default: Date.now },
    DeliveryAddress: {
        Street:{ type: String },
        City:{ type: String },
        State:{type:String},
        Pincode:{type:String}
    }
        
       
});
module.exports=mongoose.model("Transaction",PurchasedSchema);