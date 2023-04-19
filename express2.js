const http=require('http');

const express=require('express');
const bodyparser=require('body-parser');

const app=express();
app.use(bodyparser.urlencoded());
app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/user" method="POST"><input type="text" name="title"></input><input type="number" name="size"></input><button type="submit">Send</button></form>')
})
app.use('/user',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/add-product')
    
})

app.listen(2000);