const Seller = require('../../../DB/sellerSchema.js');
const Product= require('../../../DB/Product.Schema');
const deleteSellerService = (payload, callback) => {
    Seller.findOneAndRemove({ _id: payload.id }, ((err, docs) => {
        if (err)
            callback(err);
        else {
            Product.deleteMany({ SellerId: payload.id }, (err1, docs1) => {
                if(err)
                    callback(err1);
                else
                    callback(null,docs);

            })

        }
    }))
}

module.exports = deleteSellerService