const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    UID: { type: String, required: true },
    FirstName: { type: String, minlength: 1,required:true},
    LastName: { type: String, required: true },
    Email: { type: String,required:true ,minlenght:6,maxlength:30},
    Phone: { type: Number,minlength:10,maxlength:10},    
    Gender: { type: String },
    Address: {
        Street:{ type: String },
        City:{ type: String },
        State:{type:String},
        Pincode:{type:String}},
    DateOfBirth: { type:Date },
    DateOfJoining: { type: Date, default: Date.now },
        
});
module.exports=mongoose.model("User",userSchema);
