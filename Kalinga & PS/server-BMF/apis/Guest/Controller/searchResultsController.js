const SearchFromDb=require('../Service/ReteriveSearchResult')
const SearchController=(req,res)=>{

    SearchFromDb(req.body,(err,result)=>{
            if(err) 
                res.send(400,"Error in searching");
            else
                res.send(result)
    })
}

module.exports=SearchController;