const Product=require('../../../DB/Product.Schema.js');
var newprod=new Product();
var avg;
const productService=(payload,callback)=>{
    Product.find({_id:payload.productId}).exec((err,docs)=>{
        if(err)
            callback(err);
            else{
                
                callback(null,docs);
            }
    })
}
module.exports=productService;