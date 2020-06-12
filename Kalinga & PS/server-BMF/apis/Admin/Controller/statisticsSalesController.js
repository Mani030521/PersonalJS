const statisticsSalesService=require('../Service/statisticsSalesService')

const statisticsSalesController=(req,res)=>{

    statisticsSalesService(null,(err,result)=>{
        if(err)
            res.send(400,"Error fetching data from database ");
        else{
           
            let response=[];
            for(user of result)
                response[user._id-1]=user.count;
            res.send(response);
    }})

}
module.exports=statisticsSalesController;