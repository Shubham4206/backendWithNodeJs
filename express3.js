const http=require('http');
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const admin=require('./admin.js');
const shop=require('./shop.js');
app.use(bodyParser.urlencoded());
app.use('/admin',admin);
app.use('/shop',shop);
app.use((req,res)=>{
    res.status(403).send('<h1>page not found</h1>')
});
app.listen(3000);