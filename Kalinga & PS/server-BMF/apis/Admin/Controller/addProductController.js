const addProductService=require('../Service/addProductService')
const addProductController=(req,res)=>{
    
          addProductService(req.body,(err,docs)=>{
        if(err)
            res.sendStatus(400,"Bad Request");
        else
            console.log("docs"+docs);
            res.send(docs);
         })
       
        }
module.exports=addProductController;
