const Signup=require('../../../DB/User.Schema')
const addSignupService=(payload,callback)=>{
    let  newSignup = new Signup(payload);
         newSignup.save((err,docs)=>{
            if(err)
            {
            //    console.log(err)
                callback(err);
            }
            else
                callback(null,docs);
        })
        
}
module.exports=addSignupService;