const express = require('express');
const router = express.Router();
const ViewUsersController=require('../Controller/ViewUsersController')
const verifytoken=require('../Service/verifytoken.js')
const adminlogoutController=require('../../Admin/Controller/adminlogoutcontroller');
const addProductController=require('../Controller/addProductController')
const updateProductController=require('../Controller/updateProductController')
const ViewProductController=require('../Controller/ViewProductController')
const statisticsProductController=require('../Controller/statisticsProductController')
const statisticsSalesController=require('../Controller/statisticsSalesController')
const statisticsUserController=require('../Controller/statisticsUserController');
const adminSignInController=require('../Controller/adminSignInController');
const DeleteProductController=require('../Controller/DeleteProductController');
const DeleteUserController=require('../Controller/DeleteUserController')

const sellerListController=require('../Controller/sellerListController')
const reviewSellerController=require('../Controller/reviewSellerController')
const deleteSellerController=require('../Controller/deleteSellerController')
 const verifytokenseller=require('../../seller/services/verifysellerToken')

router.get('/',(req,res)=>{
    res.send("In Admin Home Route");
})
router.get('/statistics/products',verifytoken,statisticsProductController);
router.get('/statistics/users',verifytoken,statisticsUserController);
router.get('/statistics/sales',verifytoken,statisticsSalesController);


router.post('/addproduct',verifytoken,addProductController);

router.put('/updateproduct',verifytokenseller,updateProductController);
router.post('/signin',adminSignInController);
router.get('/users',verifytoken,ViewUsersController);
router.post('/products',verifytoken,ViewProductController)
router.post('/deleteproduct',verifytokenseller,DeleteProductController)
router.post('/logout', adminlogoutController);
router.post('/deleteuser',DeleteUserController);

router.get('/sellerlist',verifytoken,sellerListController);
router.post('/reviewseller',reviewSellerController);
//router.post('/rejectseller',rejectSellerController);
router.post('/deleteseller',deleteSellerController);

module.exports=router;
