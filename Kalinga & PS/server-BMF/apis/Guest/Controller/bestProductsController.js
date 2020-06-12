const bestProductsService=require('../Service/bestProductsService')
const bestProductsController=(req,res)=>{

    bestProductsService(req.body,(err,result)=>{
            if(err) 
                res.send(400,"Error in searching");
            else
                res.send(result)
    })
}

module.exports=bestProductsController;