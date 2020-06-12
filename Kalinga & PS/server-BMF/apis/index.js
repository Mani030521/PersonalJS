const express = require('express');
const bodyparser=require('body-parser');
const guestRouter=require('./Guest/Routes/guestRouter.js');
const userRouter=require('./User/Routes/UserRouter')
const adminRouter=require('./Admin/Routes/adminRouter.js');
const sellerRouter=require('./seller/Routes/sellerRouter.js')

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header("Access-Control-Allow-Methods", '*');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
    next();
})
app.use(bodyparser.json());

app.use('/',guestRouter)
app.use('/user',userRouter)
app.use('/admin',adminRouter)
app.use('/seller',sellerRouter);


module.exports = app;