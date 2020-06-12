const User=require('../../../DB/User.Schema.js');

const profileService=(payload,callback)=>{
    
    User.find({UID:payload.uid}).exec((err,docs)=>{
        
        if(err)
            callback(err);
            else{
             //   console.log(docs);
                callback(null,docs);
            }
    })
}
module.exports=profileService;