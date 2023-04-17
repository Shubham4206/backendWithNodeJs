const fs=require('fs');
const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;
    if(url==='/'){
        fs.readFile('msg.txt',(err,data)=>{
            if(err) console.log(err);
            res.write('<html>');
            res.write('<head><title>enter msg</title></head>');
            res.write(`<body>${data}</body>`);
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"></input><input type="submit" value="Send"></input></form></body>')
            res.write('</html>');
            return res.end();
        })
    }
    if(url==='/message' && method==="POST"){
        const body=[];
       req.on('data',(chunk)=>{
        body.push(chunk);
       });
       req.on('end',()=>{
        const parsed=Buffer.concat(body).toString();
        const message=parsed.split("=")[1];
        fs.writeFileSync('msg.txt',message);
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    })
        
    }
}
module.exports=requestHandler;
// module.exports={
    // handler:requestHandler
// }
// exports.handler=requestHandler;