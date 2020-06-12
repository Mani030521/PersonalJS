const sellerSignInService=require('../services/sellerSignInService')

const sellerSignInController=(req,res)=>{
   // console.log(req)
    sellerSignInService(req.body,(err,result)=>{
     //   console.log(req.body)
        if(err){
            res.send(400,"Error in Log In");
        }
       else
           
            {
                if(result==="Wrong Password")
                    res.send("Wrong UserName or Password");
                else
                    res.send(result);
            }
            
    })
}
module.exports=sellerSignInController;