const express=require('express');
const getProduct=require('../controllermvc1/productmvc1.js');
const router=express.Router();
router.get('/',getProduct.getProducts);
module.exports=router;