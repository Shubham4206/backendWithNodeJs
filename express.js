const http=require('http');

const express=require('express');

const app=express();

app.use((req,res,next)=>{
    console.log('in the middleware1');
    next();
})
app.use((req,res,next)=>{
    console.log('in the middleware2');
    res.send('<h1>hello from express js</h1>');
})
app.listen(2000);