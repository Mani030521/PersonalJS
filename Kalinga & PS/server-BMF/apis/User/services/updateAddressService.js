const PurchasedSchema = require('../../../DB/Transaction.Schema')

const updateAddressService = (payload,callback)=>{
    PurchasedSchema.findByIdAndUpdate(payload.OrderId,{$set:{"DeliveryAddress":payload.DeliveryAddress}}).then((data)=>{
      //  console.log(data)
    }).catch((err)=>{
       // console.log("error")
    })
}
module.exports = updateAddressService;