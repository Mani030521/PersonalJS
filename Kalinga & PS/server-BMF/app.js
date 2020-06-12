const express = require('express');
const mongoose=require('./DB/mongoose.js');
const routes=require('./apis/index');
const config = require('./config');
const webpush=require('web-push')

const app=express();
app.use(routes);
webpush.setVapidDetails("mailto:test@test.com",config.PublicKey,config.PrivateKey);

const PORT = process.env.PORT || config.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});