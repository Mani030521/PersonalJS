const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const StatisticsSchema=new Schema({
    stat:Number,
    statArray:[Number]
})

//new Date().getMonth()
module.exports=mongoose.model("Statistic",StatisticsSchema);