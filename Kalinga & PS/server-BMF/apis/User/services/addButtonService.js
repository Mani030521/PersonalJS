const cartSchema=require('../../../DB/Cart.Schema')
const feedback=require('../../../DB/feedback.Schema')
const user=require('../../../DB/User.Schema')

var details1={docs:[],details:[]}
const addButtonService =(payload,callback) =>{
    cartSchema.find({$and :[{ProductId : payload.pid},{UID : payload.uid}]}).then((data) => 
    {
       
        feedback.find({Productid:payload.pid}).then((docs) => {
            details1.docs=docs;
            details1.details=data;
        //    console.log(details1);
            callback(null,details1);
    })
})
}

module.exports=addButtonService