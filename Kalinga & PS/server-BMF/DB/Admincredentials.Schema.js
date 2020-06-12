const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const AdminCredentialsSchema=new Schema({
    Loginid:String,
    password:String,
    token:String
})

//new Date().getMonth()
admin=mongoose.model("AdminCredential",AdminCredentialsSchema);
module.exports=admin