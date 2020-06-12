const signupService=require('../services/signupService')
const webpush = require('web-push')
const notify = require('../../../DB/pushNotifications.Schema')

const signupController=(req,res)=>{

    signupService(req.body,(err,docs)=>{
        if(err)
            {
                res.send(400,err);
            }
            
        else
            console.log(docs);
            res.send(docs);
        notify.findOne({}).then((data) => {
            if(Object.keys(data).length!==0)
                {
        const payload = JSON.stringify({ title: `${docs.Name} has signed up as a seller` });
        webpush
          .sendNotification(data.notify,payload)
          .catch(err => console.error(err));
                }
    })

        })

}

module.exports=signupController;