const Product=require('../../../DB/Product.Schema')
const updateProductService=(payload,callback)=>{
    
        
         Product.findOneAndUpdate({_id:payload.id },{
                $set: {
                    Title:payload.Title,
                    Description:payload.Description, 
                    amount:payload.Amount, 
                    Quantity:payload.Quantity,
                    Category:payload.Category,
                    Colour:payload.Colour,
                    Material:payload.Material,
                    Weight:payload.Weight,
                    Dimension:payload.Dimension,
                    Image:payload.Image
                   
                }
}).then((data)=>
{
    callback(null,"updated")
})
}
module.exports=updateProductService;