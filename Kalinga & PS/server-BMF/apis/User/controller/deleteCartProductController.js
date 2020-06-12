const deleteCartProduct = require('../services/deleteCartProductService')


const DeleteCartProductController = (req,res)=>{
    deleteCartProduct(req.body,(err,result)=>{
        if(err){
            res.status(400).send("Unable to delete Product from the cart")
        }else{
        //    console.log("result" + result);
            res.send(result);
        }
    })
}
module.exports = DeleteCartProductController;