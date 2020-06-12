const cartSchema = require('../../../DB/Cart.Schema.js');

const insertIntoDb=(payload,callback)=>{

    
var saving = new cartSchema();
saving.UID=payload.uid;
saving.ProductId=payload.cartDetails._id;
saving.Title=payload.cartDetails.Title;
saving.Price=payload.cartDetails.amount;
saving.Quantity=1;
saving.save().then((data) => {
 cartSchema.find({UID:payload.uid}).then((data) => {
    callback(null,data);
})
})
}




module.exports=insertIntoDb