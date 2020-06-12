const Product=require('../../../DB/Product.Schema')
var x=0;

const addProductService=(payload,callback)=>{
    Product.find({$and:[{Title:payload.Title},{SellerId:payload.sellerId}]}).then((data) => {
        console.log(data.length);
            if(data.length===1)
                {
                    callback(null,"Dont add");
                }
                else if(data.length===0)
                    {
                let  newProduct = new Product({
                 Title:payload.Title,
                 Description:payload.Description, 
                 amount:payload.Amount, 
                 Quantity:payload.Quantity,
                 Category:payload.Category,
                 Colour:payload.Colour,
                 Material:payload.Material,
                 Weight:payload.Weight,
                 Quantity:payload.Quantity,
                 Dimension:payload.Dimension,
                 Image:payload.Image,
                 SellerId:"admin",
                 sellerName:"admin",
                 IsAdmin:true});
                 newProduct.save((err,docs)=>{
                    if(err)
                    {
                        callback(err);
                    }
                    else
                        callback(null,docs);
                })
            }
    })
    
}
module.exports=addProductService;