const sellerAddService=require('../services/sellerAddService')
const sellerAddController=(req,res)=>{
    
          sellerAddService(req.body,(err,docs)=>{
        if(err)
            res.sendStatus(400,"Bad Request");
        else
//console.log(docs+"results");
            res.send(docs);
         })
       
        }
module.exports=sellerAddController;
