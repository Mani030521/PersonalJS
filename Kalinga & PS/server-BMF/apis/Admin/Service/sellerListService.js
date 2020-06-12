const Seller = require('../../../DB/sellerSchema.js');

const sellerListService=(payload,callback)=>{
    
    Seller.find({}).exec((err,docs)=>{
        if(err)
            callback(err);
        else{
            callback(null,docs)}
    })
    }

module.exports = sellerListService