const decreaseQuantityService = require('../services/decreaseQuantityService');

const decreaseQuantityController = (req,res)=>{
    decreaseQuantityService(req.body,(err,result)=>{
        if(err){
            res.send("error");
        }else{
           res.send(result);
        }
    })
}
module.exports = decreaseQuantityController;