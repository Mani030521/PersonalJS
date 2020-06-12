const Seller = require('../../../DB/sellerSchema')


var jwt = require('jsonwebtoken');

function verifysellerToken(req, res, next) {

    //get auth header value..want to send token in header..
    //want to send as auth value
    const bearerHeader = req.headers['authorization'];
    //check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        //Split at space
        const bearer = bearerHeader.split(' ');
        //get token from array
        const bearerToken = bearer[1];
        //set token
        req.token = bearerToken;
        jwt.verify(req.token, "admin", (err, authData) => {
            console.log(req.body.isAdmin)
            if (err) {
                res.send(401);
            }

            else {
                if (req.body.isAdmin)
                    next();
                else{
                Seller.find({ _id:req.body.sellerId }).then(response => {
                    if (response.length === 0) {
                        res.send(401,"seller")
                    }
                    else {
                        next();
                    }
                    
                })
            }



            }
        })

    }
    else {
        res.sendStatus(403);
    }
}

module.exports = verifysellerToken