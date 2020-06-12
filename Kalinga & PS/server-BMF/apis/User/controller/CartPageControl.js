const getCartDb = require('../services/getCartDb')

const CartPageController = (req,res)=>{
      getCartDb(req.body,(err,result)=>{
        if(err){
            res.status(400).send("Unable to fetch data from database");
        }else{
            console.log(result)
            res.send(result);
        }
    })
}
module.exports = CartPageController;