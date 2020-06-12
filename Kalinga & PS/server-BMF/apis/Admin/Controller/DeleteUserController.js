const DeleteUserService = require('../Service/DeleteUserService')
let admin = require("firebase-admin");

let serviceAccount = require("../../../book-my-furniture-firebase-adminsdk-uzsr7-d4dfc406eb.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://book-my-furniture.firebaseio.com"
});


const DeleteUserController = (req, res) => {
    admin.auth().deleteUser(req.body.uid)
        .then(() => {
            DeleteUserService(req.body, (err, docs) => {
                if (err)
                    res.sendStatus(400, "Bad Request");
                else
                    res.send("Successfull");
            })
        })
        .catch((error) => {
          //  console.log("Error deleting user:", error);
        });


}

module.exports = DeleteUserController;
