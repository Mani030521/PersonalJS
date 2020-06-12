const myOrderService = require('../services/myOrderService');

const MyOrderController = (req,res) =>{
    myOrderService(req.body,(err,result)=>{
        if(err){
            res.status(400).send("Unable to view your previous order");
        }else{
            res.send(result);
        }
    })
}

module.exports = MyOrderController;