const express= require('express');
const bodyparser=require('body-parser');
const path=require('path');
const { dirname } = require('node:path/posix');
const app=express();
app.listen(5000);
app.use(bodyparser.urlencoded());
app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'./',"view","contact.html"));
})
app.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'./','view','form.html'));
})
app.get('/success',(req,res,next)=>{
    res.send('<h1>Form Successfully Filled</h1>');
})
app.use((req,res,next)=>{
    res.status(403).send('page not found');
});