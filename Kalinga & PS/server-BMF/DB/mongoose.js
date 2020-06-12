const config = require('../config.js');
const mongoose = require('mongoose');
mongoose.connect(`mongodb://${config.dbConfiguration.dbUrl}/${config.dbConfiguration.db}`, {
        user: config.dbConfiguration.user,
        pass: config.dbConfiguration.pass
    }, () => { console.log("Successflly Connected to database"); });
module.exports=mongoose;