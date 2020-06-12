const OrderSchema = require('../../../DB/Transaction.Schema');

const myOrderService = (payload,callback)=>{
    OrderSchema.find({UId:payload.UID}).then((data)=>{
        callback(null,data);
    }).catch((err)=>{
        callback(err);
    })
}

module.exports = myOrderService;