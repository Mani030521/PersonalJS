const addButtonService = require('../services/addButtonService')

const addButtonController =(req,res) => 
{
    addButtonService(req.body,(err,result) => {
        if(err)
            {
               res.status(400).send("Unable to fetch data from database");
            }
            else{
                res.send(result);
            }
    })
}

module.exports=addButtonController;