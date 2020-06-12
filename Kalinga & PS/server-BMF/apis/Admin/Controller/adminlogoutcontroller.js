const adminLogoutService=require('../Service/adminlogoutservice')
const adminlogoutController=(req,res)=>{
    adminLogoutService(req.body,(err,result)=>{
        if(err){
            res.send(400,"Error in log out");
        }
        if(result)
           res.send(result);
            
    })
}
module.exports=adminlogoutController;