var jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    
    
    //get auth header value..want to send token in header..
    //want to send as auth value
  //  console.log(req)
    const bearerHeader = req.headers['authorization'];
    //check if bearer is undefined
    //console.log(bearerHeader);
    if (typeof bearerHeader !== 'undefined') {
        //Split at space
        const bearer = bearerHeader.split(' ');
        //get token from array
        const bearerToken = bearer[1];
        
        //set token
        
      //  console.log(bearerToken);
        jwt.verify(bearerToken, "admin", (err, authData) => {
            
            if (err) {
                res.sendStatus(401);
            }

            else {
                
                next();
            }
        })




    }
    else {
        res.sendStatus(403);
    }
}

module.exports=verifyToken