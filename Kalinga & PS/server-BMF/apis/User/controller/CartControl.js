const CartInsertDb=require('../services/insertIntoDbCart')

const CartController=(req,res)=>{
    CartInsertDb(req.body,(err,result)=>{
    if(err)
        {
            res.send(400,"Unable to add to database");
        }   
        else{
            res.send(result)
        }
})
}

module.exports=CartController;