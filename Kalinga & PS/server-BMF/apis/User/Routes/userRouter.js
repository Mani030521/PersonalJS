const express = require('express');
const router = express.Router();
const CartController=require('../controller/CartControl')
const CartPageController = require('../controller/CartPageControl')
const DeleteCartProductController = require('../controller/deleteCartProductController')
const PurchasedController = require('../controller/PurchasedControl')
const SignInController = require('../controller/sigincontroller')
const addButtonController = require('../controller/addButtonController')
const profileController=require('../controller/profilecontroller')
const MyOrderController = require('../controller/MyOrderController')
const IncreaseQuantityController = require('../controller/IncreaseQuantityController')
const GiveRatingController=require('../controller/GiveRatingController')
const updateprofileController=require('../controller/updateProfileController')
const decreaseQuantityController=require('../controller/decreaseQuantityController')
const updateAddressController  = require('../controller/UpdateAddressController')

router.post('/Cart',CartController);
router.post('/cartPage',CartPageController);
router.post('/deletecartproduct',DeleteCartProductController);
router.post('/purchase',PurchasedController);
router.post('/currentuser',SignInController);
router.post('/addbutton',addButtonController);
router.post('/profile',profileController);
router.post('/myorder',MyOrderController);
router.post('/increase',IncreaseQuantityController);
router.post('/giverating',GiveRatingController)
router.post('/decrease',decreaseQuantityController);
router.post('/updateprofile',updateprofileController)
router.post('/updateAddress',updateAddressController)

module.exports=router;
