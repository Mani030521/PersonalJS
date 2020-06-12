const TempBuy=require('../../../DB/Transaction.Schema')

const statisticsSalesService=(payload,callback)=>{
    TempBuy.aggregate( [ { $group : { _id:{$month:"$date"} ,count:{$sum:"$TotalQuantity"}} } ] ,(err,docs)=>{
        if(err)
            callback(err);
        else
            callback(null,docs);
    } )
}
module.exports=statisticsSalesService;