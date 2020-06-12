const PurchasedSchema = require('../../../DB/Transaction.Schema')
const cartCollection = require('../../../DB/Cart.Schema')
const userCollection = require('../../../DB/User.Schema')
const productschema = require('../../../DB/Product.Schema')
const nodemailer = require('nodemailer');


var quantity = []
const insertProductIntoDb = (payload, callback) => {
    // console.log("purchase",payload)
    var payloadd = payload.productDetails
    // console.log("purchase payload",payloadd)


    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'mindtreereactjuly@gmail.com',
            pass: 'mindtree123'
        },
        tls: {
            rejectUnauthorized: false
        }
    });



    var product = []
    for (let i = 0; i < payloadd.length; i++) {
        productschema.find({ _id: payloadd[i]._id }).then((data) => {
            quantity[i] = {
                productid: data[0]._id,
                quantity: data[0].Quantity
            }
            //  console.log(quantity);
            productschema.update({ _id: payloadd[i]._id }, { $set: { 'Quantity': quantity[i].quantity - payloadd[i].Quantity } }).then((data) => {

            })
        })
    }
    for (var i = 0; i < payload.length; i++) {
        product[i] = {
            productId: payloadd[i]._id,
            quantity: payloadd[i].Quantity,
            price: payloadd[i].amount,
            Title: payloadd[i].Title,
            Image: payloadd[i].Image
        }
    }
    var Purchase = new PurchasedSchema();
    Purchase.UId = payload.Uid;
    Purchase.Product = product;
    Purchase.totalamount = payload.totalprice;
    Purchase.TotalQuantity = payload.length;
    Purchase.DeliveryAddress = payload.address;


    Purchase.save().then((data) => {
        cartCollection.deleteMany({ UID: payload.Uid }).then(() => {
            userCollection.findOne({ UID: payload.Uid }).then((datas) => {
                var detail = {};
                detail.purchased = data;
                detail.user = datas;
                callback(null, detail)
                let str = `<table style="width:100%">
                <tr>
                <th>Title</th>
                <th>Quantity</th>
                <th>Price</th> 
                
              </tr>`;
                data.Product.map(item => {
                    str = str + `<tr><td>${item.Title}</td><td>${item.quantity}</td><td>₹${item.price}</td><tr>`
                })
                const output = `
                <head>
                <style>
                table, th, td {
                    border: 1px solid black;
                    border-collapse: collapse;
                    padding: 5px;
                    text-align: center;
                }
                </style>
                </head>
                <body><p>Dear ${datas.FirstName},</p>
                                <br>
                                <p>Thankyou for purchasing product from Furnique. Your Order has been successfully placed.</p>
                                <br>
                                <p>Your <b>Transaction Id</b> is <b> ${data._id}</b> and a total amount of <b>₹ ${data.totalamount}</b> is been
                                processed from your account.You can view the order details under My Orders section on our website. The order summary 
                                for your order is given below.</p>
                                <br>
                                ${str}</table>
                                <br>
                                <br>
                                <p>The above order is being deliver on the address</p>
                                <br>
                                <b>${data.DeliveryAddress.Street}, ${data.DeliveryAddress.City}, ${data.DeliveryAddress.State}, ${data.DeliveryAddress.Pincode}</b>
                                <br>
                                <br>
                                Regards<br>
                                Furnique

                                </body>
                                `
                let HelperOptions = {
                    from: '"Book My furniture" <mindtreereactjuly@gmail.com>',
                    to: `${datas.Email}`,
                    subject: `Order Successfully Placed`,
                    html: output
                };
                transporter.sendMail(HelperOptions, (err, info) => {
                    if (err) {
                        return console.log(err);
                    }
                    console.log("The email was sent");
                    console.log(info);
                });

            })
        }).catch((err) => {
            callback(err);
        })

    }).catch((err) => {
        callback(err);
    });

}
module.exports = insertProductIntoDb;