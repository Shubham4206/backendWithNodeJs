const express=require('express');
const router=express.Router();
const bodyparser=require('body-parser');
const form=require('../controllermvc2/contactmvc2');
router.use(bodyparser.urlencoded());
router.get('/',form.getContactUs);
router.post('/contactus',form.postContactUs)
router.post('/success',form.success);
module.exports=router;