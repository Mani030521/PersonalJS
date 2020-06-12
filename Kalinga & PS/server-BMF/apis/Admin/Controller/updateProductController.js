const updateProductService=require('../Service/UpdateProductService')
const updateProductController=(req,res)=>{
    
          updateProductService(req.body,(err,docs)=>{
        if(err)
            res.sendStatus(400,"Bad Request");
        else
            res.send(req.body);
         })
       
        }
module.exports=updateProductController;
