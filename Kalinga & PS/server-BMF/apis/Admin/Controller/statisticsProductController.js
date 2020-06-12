const statisticsProductService=require('../Service/statisticsProductService')
const statisticsProductController=(req,res)=>{

    statisticsProductService(null,(err,result)=>{
        if(err)
            res.send(400,"Error fetching data from database ");
        else{
            let response={}
               if(result[0])
                    response[result[0]._id]=result[0].count     
               
               if(result[1])
                response[result[1]._id]=result[1].count     
               
               if(result[2])
                response[result[2]._id]=result[2].count     
               
               if(result[3])
                response[result[3]._id]=result[3].count
               
               if(result[4])
                response[result[4]._id]=result[4].count
       
            res.send(response);
    }})

}
module.exports=statisticsProductController;