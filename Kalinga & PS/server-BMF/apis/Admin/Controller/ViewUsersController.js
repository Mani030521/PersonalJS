const ViewUserService=require('../Service/ViewUserService')

const ViewUserController=(req,res)=>{
    
    ViewUserService(null,(err,result)=>{
        
        if(err){
            res.send(400,"Error in viewing users");
        }
        
        
            else
            res.send(result);
    })
}

module.exports=ViewUserController;