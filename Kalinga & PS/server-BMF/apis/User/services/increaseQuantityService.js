const ProductSchema = require('../../../DB/Product.Schema')
const CartSchema = require('../../../DB/Cart.Schema')

const increaseQuantity = (payload,callback)=>{
    ProductSchema.findOne({_id:payload.productId}).then((data) => {
        if(data.Quantity > payload.Quantity)
            {
                CartSchema.findOneAndUpdate({$and :[{UID:payload.Uid},{ProductId:payload.productId}]},
                {$set:{"Quantity":(payload.Quantity)+1}}).then((data) => {
                    callback(null,"ok"  );
                })
            }
            else 
                {
                    callback(null,"Error")
                }
    })
}
module.exports  = increaseQuantity;