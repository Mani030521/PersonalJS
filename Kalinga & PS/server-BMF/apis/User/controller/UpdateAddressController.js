const updateAddressService = require('../services/updateAddressService')
const updateAddressController = (req,res) =>{
    updateAddressService(req.body,(err,result)=>{
        if(err){
            res.status(400).send("Cannot update Address")
        }else{
            res.send(result)
        }
    })
}
module.exports = updateAddressController;