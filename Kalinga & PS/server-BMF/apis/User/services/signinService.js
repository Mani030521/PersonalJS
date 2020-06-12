const userschema=require('../../../DB/User.Schema');
const cartSchema=require('../../../DB/Cart.Schema')

var cart=[];
var length;
var details={};
const SignInService =(payload,callback) =>{
    cartSchema.find({UID:payload.uid}).then((cart) =>
{
    userschema.findOne({UID:payload.uid}).then((data) => 
    {
        details={
            data:data,
            length:cart.length
        }
     //   console.log(details);
      callback(null,details);
    })

  
})
   }

module.exports=SignInService;