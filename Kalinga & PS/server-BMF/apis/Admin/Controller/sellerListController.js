const sellerListService = require('../Service/sellerListService')

const sellerListController = (req, res) => {
    sellerListService(null, (err, result) => {
        if (err) {
            res.send(400, "Error fetching data from database");
        }
        else {
            let approvedSeller = result.filter((item) => {
                if (item.IsAdminApproved)
                    return true;
                else
                    return false;
            })
            let pendingSeller = result.filter((item) => {
                if (!item.IsAdminReviewed)
                    return true;
                else
                    return false;
            })
            let rejectedSeller = result.filter((item) => {
                if (item.IsAdminReviewed && !item.IsAdminApproved)
                    return true;
                else
                    return false;
            })

            res.send({ approvedSeller, pendingSeller,rejectedSeller })
        }
    })
}

module.exports = sellerListController;