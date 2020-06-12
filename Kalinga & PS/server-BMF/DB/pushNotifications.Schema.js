const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const pushNotificationSchema=new Schema({
    notify:{type:Object}
})

var admin=mongoose.model("pushnotification",pushNotificationSchema);
module.exports=admin