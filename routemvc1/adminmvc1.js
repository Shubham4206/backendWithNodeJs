const express=require('express');
const router=express.Router();
const adminProduct=require('../controllermvc1/productmvc1.js');
router.get('/add-product',adminProduct.getAddProducts);
router.post('/add-product',adminProduct.postAddProducts);
module.exports=router;