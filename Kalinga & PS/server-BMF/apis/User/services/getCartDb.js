
const cartPageSchema = require('../../../DB/Cart.Schema')
const productSchema = require('../../../DB/Product.Schema')

const getCartDb = (payload,callback)=>{
    cartPageSchema.find({UID:payload.UID}).then((data) => {
        pids=[]
        for(let i=0;i<data.length;i++){
            pids[i]=data[i].ProductId;
        }
        productSchema.find({_id:[...pids]}).then((docs) => {
            var details={}
            docs.sort((a,b) => {
              if(a.Title < b.Title)    
                return -1;
              else
                return 1;
              return 0;
            })
            data.sort((a,b) => {
                if(a.Title < b.Title)    
                  return -1;
                else
                  return 1;
                return 0;
              })
           details.Products=docs;
           details.Cart=data;
          // console.log(details);
           callback(null,details); 
        })
}).catch((err) => {
    callback(err)
})
}


 module.exports = getCartDb;
