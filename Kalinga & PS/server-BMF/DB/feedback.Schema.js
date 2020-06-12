const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const feedbackSchema=new Schema({
    Productid:String,
    Userid:String,
    Name:String,
    FeedbackText:String,
    Rating:Number

})

//new Date().getMonth()
var admin=mongoose.model("feedback",feedbackSchema);
module.exports=admin