var product=require('../../../DB/Product.Schema')
const feedback=require('../../../DB/feedback.Schema')



var avg;
const getSearchResults=(payload,callback)=>{
    var search = new String(payload.SearchValue);
    var search1=search.trim();
    var regex = /^[a-zA-Z0-9 ]+[a-zA-Z0-9 ]*$/
    console.log(payload.SearchValue)
    if( regex.test(search1))
        {
    product.find({$or :[ { Title:{$regex:new RegExp (search1,"i") }},{Category:{$regex:new RegExp (search1,"i") }}]} ).then((data) => {
              
        callback(null,data)
    })
}
else {
    callback(null,"No results");
}
}
module.exports=getSearchResults;
