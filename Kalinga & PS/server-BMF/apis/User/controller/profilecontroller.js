const profileService=require('../services/profileService')

const profileController=(req,res)=>{
    
    profileService(req.body,(err,result)=>{
        
        if(err){
            res.send(400,"Error in viewing profile");
        }
        else
            res.send(result);
    })
}

module.exports=profileController;