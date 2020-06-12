const productService=require('../Service/productService')
const individualProduct=(req,res)=>{

    productService(req.body,(err,result)=>{
            if(err) 
                res.send(400,"Error in searching");
            else
                console.log(result)
                res.send(result)
    })
}

module.exports=individualProduct;