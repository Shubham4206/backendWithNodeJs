const express= require('express');

// const path=require('path');
const { dirname } = require('node:path/posix');
const route=require('./routemvc2/contactmvc2')
const app=express();
app.listen(5000);
// app.use(bodyparser.urlencoded());
app.use(route);
app.use((req,res,next)=>{
    res.status(403).send('page not found');
});