const Product=require('../../../DB/Product.Schema.js');
const seller=require('../../../DB/sellerSchema')

var name;
const sellerViewProduct=(payload,callback)=>{
   Product.find({SellerId:payload.sellerId}).then((data) => {
     //  console.log(data);
    seller.find({_id:payload.sellerId}).then((sellerdetails) => {
     //   console.log(sellerdetails[0].Name);
       name=sellerdetails[0].Name
       for(let i=0;i<data.length;i++)
        {
            data[i].SellerId=name
        }
        callback(null,data);
       
    })
     
   })
}
module.exports=sellerViewProduct;