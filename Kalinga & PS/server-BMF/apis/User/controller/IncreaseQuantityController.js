const increaseQuantity = require('../services/increaseQuantityService');

const IncreaseQuantityController = (req,res)=>{
    increaseQuantity(req.body,(err,result)=>{
        if(err){
            res.send("error");
        }else{
        //    console.log(result);
           
            res.send(result);
        }
    })
}
module.exports = IncreaseQuantityController;