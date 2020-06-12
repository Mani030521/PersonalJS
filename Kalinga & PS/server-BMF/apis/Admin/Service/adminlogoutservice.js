const adminlogout=require('../../../DB/Admincredentials.Schema')

const adminLogoutService=(payload,callback) =>
{
    adminlogout.remove({}).then((data) => {
        callback(null,data)
      
    })

}

module.exports=adminLogoutService