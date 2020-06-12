const adminSignInService = require("../Service/SignInService");

const adminSignInController = (req, res) =>
  adminSignInService(req.body, (error, result, statusCode = null) => {
    if (error) {
      res.status(statusCode).send("Error in logging");
    }
    if (result) {
      res.send(statusCode, result);
    }
  });

module.exports = adminSignInController;
