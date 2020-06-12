const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    Title: { type: String,maxlength: 20 },
    Description: { type: String, minlength: 10 },
    SellerId: { type: String, required: true },
    sellerName:{type:String,required:true},
    Image: {type: String },
    amount: { type: Number, required: true },
    Quantity:{ type: Number, required: true },
    Category: { type: String, required: true },
    Colour: { type: String, required: true },
    Quantity: { type: Number, required: true },
    Material: { type: String, required: true },
    Weight: { type: String, required: true },
    Dimension: { type: String, required: true },
    IsAdmin: {type:Boolean},
});
module.exports=mongoose.model("product",productSchema);
