const User=require('../../../DB/User.Schema')
const DeleteUserService=(payload,callback)=>{


    User.findOneAndDelete({UID:payload.uid}).exec((err,docs)=>{
        if(err)
            callback(err);
        else{
         //   console.log(docs);
            callback(null,docs);
        }
    })
}
module.exports=DeleteUserService;