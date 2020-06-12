const User = require('../../../DB/User.Schema');



const ViewUserService=(payload,callback)=>{
    
    User.find({}).exec((err,docs)=>{
        if(err)
            callback(err);
        else{
            callback(null,docs)}
    })
    }

module.exports = ViewUserService