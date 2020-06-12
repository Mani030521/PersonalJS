const insertProductIntoDb = require('../services/insertProductIntoDb')

const PurchasedController = (req, res) => {
    insertProductIntoDb(req.body, (err, result) => {
        if (err) {
            res.status(400).send("Unable to place order");
        } else {
            res.send(result)
        }
    })
}
module.exports = PurchasedController;   