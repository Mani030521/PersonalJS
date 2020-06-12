const Product=require('../../../DB/Product.Schema')
const sellerAddService=(payload,callback)=>{
    Product.find({$and:[{Title:payload.Title},{SellerId:payload.sellerId}]}).then((data) => {
        console.log(data.length);
            if(data.length===1)
                {
                    callback(null,"Dont add");
                }
                else if(data.length===0)
                    {
    var  newProduct = new Product();
    newProduct.Title=payload.Title;
    newProduct.Description=payload.Description, 
    newProduct.amount=payload.Amount, 
    newProduct.Category=payload.Category,
    newProduct.Colour=payload.Colour,
    newProduct.Material=payload.Material,
    newProduct.Weight=payload.Weight,
    newProduct.Dimension=payload.Dimension,
    newProduct.Image=payload.Image,
    newProduct.SellerId =payload.sellerId,
    newProduct.sellerName=payload.sellername;
    newProduct.Quantity=payload.Quantity,
    newProduct.IsAdmin=false
         newProduct.save().then((data) => {
             callback(null,data)
         })
        }
    })
}
module.exports=sellerAddService;