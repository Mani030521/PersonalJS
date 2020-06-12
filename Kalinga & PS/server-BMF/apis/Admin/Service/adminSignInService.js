var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt-nodejs')

var AdminCredentialSchema=require('../../../DB/Admincredentials.Schema')
const logincredentials = {
    userid: "admin",
    password: "admin"
}
let tokenval;
const adminSignInService = (payload, callback) => {
  //  console.log("payload",payload)
    let result = (((payload.password) === logincredentials.password) && payload.userid===logincredentials.userid)
  //  console.log(result)
    if (result) 
        
        jwt.sign(logincredentials, payload.userid, (err, token) => {
            var AdminCred=new AdminCredentialSchema();
            AdminCred.Loginid="admin"
            AdminCred.token=token;
            AdminCred.password=bcrypt.hashSync("admin");
            
            AdminCred.save((err,docs)=>{
                if(err)
                    {
                        callback(err);
                    }
                    else
                        callback(null,docs.token);
            })
        
        })      
        
    }
    else
        callback(null,"Wrong Password")

}

module.exports=adminSignInService;