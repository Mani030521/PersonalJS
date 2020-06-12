const sellerViewProduct=require('../services/sellerViewProduct')

const sellerShowProducts=(req,res)=>{
    
    sellerViewProduct(req.body,(err,result)=>{
      //  console.log(req.body);
        if(err){
            res.sendStatus(400,"Bad Request");
        }
        else
            res.send(result);
    })
}

module.exports=sellerShowProducts;