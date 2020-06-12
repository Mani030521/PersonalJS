const TempUser=require('../../../DB/User.Schema')

const statisticsUserService=(payload,callback)=>{
    TempUser.aggregate( [ { $group : { _id:{$month:"$DateOfJoining"} ,count:{$sum:1}} } ] ,(err,docs)=>{
        if(err)
            callback(err);
        else
            callback(null,docs);
    } )
}
module.exports=statisticsUserService;