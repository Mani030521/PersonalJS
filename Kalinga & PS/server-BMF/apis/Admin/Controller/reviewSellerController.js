const reviewSellerService = require('../Service/reviewSellerService')

const reviewSellerController = (req, res) => {
    reviewSellerService(req.body, (err, result) => {
        if (err) {
            res.status(400).send("Error fetching data from database");
        }
        else {
            res.send("Seller Successfully Reviewed");
        }
    })
}

module.exports = reviewSellerController;