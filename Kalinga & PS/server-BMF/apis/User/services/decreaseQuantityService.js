const CartSchema = require('../../../DB/Cart.Schema')

const decreaseQuantityService=(payload,callback)=>{
  //  console.log(payload);
    if(payload.Quantity>1)
        {
            CartSchema.findOneAndUpdate({$and :[{UID:payload.Uid},{ProductId:payload.productId}]},
                {$set:{"Quantity":(payload.Quantity)-1}}).then((data) => {
                    callback(null,"ok");
                })
        }
        else
            {
                callback(null,"Error");
            }
}

module.exports=decreaseQuantityService;