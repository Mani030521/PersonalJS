
var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var CartDetails=new Schema({
 UID :{
     type:String
 },
 ProductId:{
     type:String
 },
 Title:{
     type:String
 },
 Price:{
     type:Number
 },
 Quantity:{
     type:Number,
 }
})

 var Cart=mongoose.model('UserDetails',CartDetails);

module.exports=Cart;