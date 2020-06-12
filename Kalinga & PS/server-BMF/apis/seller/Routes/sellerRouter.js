const express = require('express');
const router = express.Router();
const signupController=require('../controller/signupController')
const signinController=require('../controller/SignInController')
const sellerAddController=require('../controller/sellerAddController')
const sellerShowProducts=require('../controller/sellerShowProducts')
const verifytoken=require('../../Admin/Service/verifytoken')
const verifytokenseller=require('../services/verifysellerToken')


router.post('/Signup',signupController);
router.post('/signin',signinController);
router.post('/addproduct',verifytokenseller,sellerAddController);
router.post('/products',verifytokenseller,sellerShowProducts)

module.exports=router;  