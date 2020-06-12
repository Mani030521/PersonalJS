    const Product=require('../../../DB/Product.Schema.js');
var newprod=new Product();
var avg;
const categoryService=(payload,callback)=>{
 //   console.log("im here",payload.typeOfProduct);
    Product.find({Category:payload.typeOfProduct}).exec((err,docs)=>{
        
        if(err)
            callback(err);
            else{
                
                callback(null,docs);
            }
    })
}
module.exports=categoryService;