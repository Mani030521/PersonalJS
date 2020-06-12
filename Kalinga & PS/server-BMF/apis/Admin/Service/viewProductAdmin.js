const Product=require('../../../DB/Product.Schema.js');
const seller=require('../../../DB/sellerSchema')

var quantity=[]
var j=0;
var k=0;
const ViewProductService=(payload,callback)=>{
  //  console.log(payload);
    Product.find({}).exec((err,docs)=>{
    //    console.log(docs);
        for(var i=0;i<docs.length;i++)
            {
                if(docs[i].SellerId!=="admin")
                    {
                    docs[i].SellerId=docs[i].sellerName 
                    }
                    else
                        {
                            docs[i].SellerId="admin"
                        }
            }
        
        callback(null,docs);
        
    })
}
module.exports=ViewProductService;