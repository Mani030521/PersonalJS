const Product=require('../../../DB/Product.Schema')
const statisticsProductService=(payload,callback)=>{
    Product.aggregate( [ { $group : { _id : "$Category",count:{$sum:"$Quantity"}} } ],(err,docs)=>{
        if(err)
            callback(err);
        else
            callback(null,docs);
    } )
}
module.exports=statisticsProductService;