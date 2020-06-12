const product = require('../../../DB/Product.Schema')

var avg = [];
var sum = 0;
const bestProductsService = (paylaod, callback) => {
    product.find({}).then((data) => {
        var j = data.length - 1
        for (var i = 0; i < 8; i++) {
            
                avg[i] = data[j--]
            

        }

        callback(null, avg)
    })


}
module.exports = bestProductsService