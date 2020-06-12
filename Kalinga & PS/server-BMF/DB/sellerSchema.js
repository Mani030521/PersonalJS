const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const sellerSchema = new Schema({
    Name:{
        type:String,
        required:true,
        maxlength:20,
        unique:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    },
    PANNum:{
        type:String,
        required:true,
        unique:true
    },
    GSTNum:{
        type:String,
         required:true,
         unique:true
    },
    Address: {
        Street:{
             type: String, 
             required: true 
            },
        City:{ 
            type: String, 
            required: true 
        },
        State:{
            type:String,
            required:true
        },
        Pincode:{
            type:String,
            required:true
        }
    },
    IsAdmin: {
        type:Boolean,
        default:false
    },
    IsAdminReviewed:{
        type:Boolean,
        default:false
    },
    IsAdminApproved:{
        type:Boolean,
        default:false
    },
    DateOfJoining:{ 
        type: Date, 
        default: Date.now 
    },
});
module.exports=mongoose.model("seller",sellerSchema);
