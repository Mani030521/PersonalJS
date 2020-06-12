const addSignupService=require('../Service/addSignupService')
const addSignupController=(req,res)=>{

    addSignupService(req.body,(err,docs)=>{
        if(err)
            res.sendStatus(400);
        else
            res.send(docs);
    })
}

module.exports=addSignupController;