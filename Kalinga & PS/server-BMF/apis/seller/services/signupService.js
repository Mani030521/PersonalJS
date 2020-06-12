const sellerSchema = require('../../../DB/sellerSchema')
var bcrypt = require('bcrypt-nodejs')

const signupService = (payload, callback) => {
    let seller = new sellerSchema();
    seller.Name = payload.name;
    seller.PANNum = payload.pannum;
    seller.GSTNum = payload.gstnum;
    seller.Email = payload.email;
    seller.Password = bcrypt.hashSync(payload.password);
    seller.Address.Street = payload.street;
    seller.Address.City = payload.city;
    seller.Address.State = payload.state;
    seller.Address.Pincode = payload.pincode;

    seller.save().then((data) => {
     //   console.log(data);
        callback(null, data);
    }).catch((err => {
     //   console.log(err.errmsg)
        if (err.errmsg === `E11000 duplicate key error collection: Orchard4.sellers index: Email_1 dup key: { : "${payload.email}" }`)
            callback("Error in email");
        else if (err.errmsg === `E11000 duplicate key error collection: Orchard4.sellers index: PANNum_1 dup key: { : "${payload.pannum}" }`) {
            callback("Error in pannum")
        }
        else if (err.errmsg === `E11000 duplicate key error collection: Orchard4.sellers index: GSTNum_1 dup key: { : "${payload.gstnum}" }`) {
            callback("Error in gstnum")
        }
        else if(err.errmsg===`E11000 duplicate key error collection: Orchard4.sellers index: Name_1 dup key: { : "${payload.name}" }`){
            callback("Error in name")
        }
        else
            callback(err);
    }))
}
module.exports = signupService;