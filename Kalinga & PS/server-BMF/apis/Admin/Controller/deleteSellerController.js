const deleteSellerService = require('../Service/deleteSellerService')

const deleteSellerController = (req, res) => {
    deleteSellerService(req.body, (err, result) => {
        if (err) {
            res.status(400).send("Error fetching data from database");
        }
        else {
            res.send("Seller Deleted");
        }
    })
}

module.exports = deleteSellerController;