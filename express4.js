const http=require('http');
const fs=require('fs');
const express=require('express');
const bodyparser=require('body-parser');

const app=express();
app.use(bodyparser.urlencoded());
app.use('/login',(req,res,next)=>{
    
res.send(`<form action="/"  onsubmit=localStorage.setItem('username',document.getElementById("username").value)><input type="text" name="title" id='username'></input><button type="submit">login</button></form>`)
    })

app.get('/',(req,res,next)=>{
    fs.readFile('ab.text',(err,data)=>{

        
        res.send(`<div>${data}</div><form action='/' method='post' onsubmit="document.getElementById('local').value=localStorage.getItem('username')"><input type="text" name="message" id="message"></input><input type="hidden" name="local" id="local"></input><button type="submit">send</button></form>`)
    })
    
})
app.post('/',(req,res,next)=>{
   // const arr=[];
   
    const data=`${req.body.local}: ${req.body.message}`;
    fs.appendFileSync('ab.text',data);
    res.redirect('/');
})
app.listen(2000);