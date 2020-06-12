const ViewProductService=require('../Service/viewProductAdmin')

const ViewProductController=(req,res)=>{
    
    ViewProductService(req.body,(err,result)=>{
      //  console.log(req.body);
        if(err){
            res.sendStatus(400,"Bad Request");
        }
        else
            res.send(result);
    })
}

module.exports=ViewProductController;