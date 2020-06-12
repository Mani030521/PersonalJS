const express = require('express');
const router = express.Router();
const categoryController=require('../Controller/categoryController')
var AddUser=require('../../../DB/User.Schema.js');
const addSignupController=require('../Controller/addSignupController')
const SearchController=require('../Controller/searchResultsController')
const bestProductsController = require('../Controller/bestProductsController')
const individualProducts = require('../Controller/individualProduct')

router.get('/',(req,res)=>{
    res.send("Welocome to Book My Furniture");
})

router.post('/category',categoryController);
router.post('/searchresults',SearchController)
router.post('/signup',addSignupController);
router.post('/sign',addSignupController)
router.get('/bestproducts',bestProductsController);
router.post('/individualProducts',individualProducts)

module.exports=router;
