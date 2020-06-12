const updateProfileService=require('../Services/updateProfileService')
const updateProfileController=(req,res)=>{

    updateProfileService(req.body,(err,docs)=>{
        if(err)
            res.sendStatus(400);
        else
            res.send(docs);
    })
}

module.exports=updateProfileController;