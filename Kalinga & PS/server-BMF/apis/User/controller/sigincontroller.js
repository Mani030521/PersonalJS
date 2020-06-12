const SignInService = require('../services/signinService')

const SignInController =(req,res) => 
{
    SignInService(req.body,(err,result) => {
        if(err)
            {
                res.status(400).send("Error in signing in");
            }
            else{
                if(result.data===null)
                    {
                        res.send(null);
                    }
                    else
                        {
                res.send(result)
                        }
            }
    })
}

module.exports=SignInController;