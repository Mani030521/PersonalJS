var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs')

var SellerCredentialSchema = require('../../../DB/sellerSchema')

let tokenval;
const sellerSignInService = (payload, callback) => {
 //   console.log(payload);
    SellerCredentialSchema.findOne({ Email: payload.email }).exec((err, response) => {
        if (err) {
          //  console.log(err);
            callback(err)
        }
        else if (response === null) {
            callback(null, "No Seller Found")
        }
        else {
            let result = bcrypt.compareSync(payload.password, response.Password)
            
            if (result) {
                jwt.sign({ response }, "admin", (err, token) => {
            //        console.log(token);
                    callback(null,{
                        token: token,
                        name: response.Name,
                        sellerid:response._id,
                        isApproved:response.IsAdminApproved
                    })
                })
            }
            else {
                callback(null, "Wrong Password")
            }
        }
    })
}

module.exports = sellerSignInService;