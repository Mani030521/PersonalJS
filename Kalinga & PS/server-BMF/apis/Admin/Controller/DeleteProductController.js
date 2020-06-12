const DeleteProductAdminService=require('../Service/DeleteProductAdmin')
const DeleteProductController=(req,res)=>{

    DeleteProductAdminService(req.body.product,(err,docs)=>{
        if(err)
            res.sendStatus(400,"Bad Request");
        else
            res.send(docs);
    })
}

module.exports=DeleteProductController;
