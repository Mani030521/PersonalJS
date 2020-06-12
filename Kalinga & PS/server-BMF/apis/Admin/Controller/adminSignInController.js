const adminSignInService = require("../Service/adminSignInService");
const config = require("../../../config");
const webpush = require("web-push");
const pushNotification = require("../../../DB/pushNotifications.Schema");

const adminSignInController = (req, res) => {
  adminSignInService(req.body, (err, result) => {
    if (err) {
      res.send(400, "Error in Log In");
    }
    if (result) {
      if (result === "Wrong Password")
        res.send(401, "Wrong UserName or Password");
      else {
        res.send(result);
        const subscription = req.body.subscription;
        if(subscription!==null)
            {
        pushNotification.remove({}).then(data => {
          var newDocument = new pushNotification();
          newDocument.notify = subscription;
          newDocument.save();
        });
    }
      }
    }
  });
};
module.exports = adminSignInController;
