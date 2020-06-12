const cartPageSchema = require('../../../DB/Cart.Schema')



const deleteCartProduct = (payload,callback)=>{
   // console.log(payload+"client");
    cartPageSchema.find({UID:payload.Uid}).then((data)=>{
     //   console.log("My products" + data)
        cartPageSchema.findOneAndRemove({ProductId:payload.productId}).then((datas)=>{
               cartPageSchema.find({UID:payload.Uid}).then((product)=>{
              //    console.log("deleted",product)
                  callback(null,product)
               }).catch((err)=>{
                   callback(err);
               })
        }).catch((err)=>{
            callback(err)
        })
    }).catch((err)=>{
        callback(err)
    })
}
module.exports = deleteCartProduct;
