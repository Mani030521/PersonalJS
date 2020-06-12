const Product=require('../../../DB/Product.Schema')
const cart = require('../../../DB/Cart.Schema')
const DeleteProductAdminService=(payload,callback)=>{


    Product.findOneAndDelete({_id:payload._id}).then((data)=>
{
    cart.deleteMany({ProductId:payload._id}).then((docs) => {
        
        callback(null,"deleted")
    })
    
})
}
module.exports=DeleteProductAdminService;