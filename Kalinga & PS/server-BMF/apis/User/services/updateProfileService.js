const User=require('../../../DB/User.Schema')
const updateProfileService=(payload,callback)=>{
    
    User.findByIdAndUpdate(payload._id,payload,(err,docs)=>{
        if(err)
            callback(err)
        else
            callback(null,docs)
    })
}
module.exports=updateProfileService;