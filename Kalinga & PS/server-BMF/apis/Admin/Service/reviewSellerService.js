const Seller = require('../../../DB/sellerSchema.js');

const acceptSellerService = (payload, callback) => {
    let status = { IsAdminReviewed: true,IsAdminApproved :false }
    if (payload.accepted)
        status.IsAdminApproved = true;
    Seller.findOneAndUpdate({ _id: payload.id }, { $set:status },
        ((err, docs) => {
            if (err)
                callback(err);
            else
                callback(null, docs);
        }))
}

module.exports = acceptSellerService