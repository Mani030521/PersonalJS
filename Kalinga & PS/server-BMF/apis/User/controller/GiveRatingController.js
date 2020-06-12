const GiveRatingService=require('../services/GiveRatingService')

const GiveRatingController=(req,res)=>{
    
    GiveRatingService(req.body,(err,result)=>{
        
        if(err){
            res.send(400,"Error in viewing profile");
        }
        else
            res.send(result);
    })
}

module.exports=GiveRatingController;