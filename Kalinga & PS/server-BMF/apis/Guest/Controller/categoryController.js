const categoryService = require('../Service/categoryService.js')

const categoryController = (req, res) => {
    if (req.body.typeOfProduct) {
        if (req.body.typeOfProduct === "Sofa" || req.body.typeOfProduct === "Beds" ||
            req.body.typeOfProduct === "Tables" || req.body.typeOfProduct === "Dressing Table" ||
            req.body.typeOfProduct === "Chairs") {

            categoryService(req.body, (err, result) => {

                if (err) {
                    res.send(400, "Error in viewing products");
                }
                else
                    res.send(result);
            })
        }

        else
            res.send(400, "No such Category Found")
    }
    else
        res.send(400,"Not a Valid data")
}

    module.exports = categoryController;