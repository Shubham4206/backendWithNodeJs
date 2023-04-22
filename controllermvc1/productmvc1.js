exports.getAddProducts=(req,res,next)=>{
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"></input><input type="number" name="size"></input><button type="submit">Send</button></form>')
};
exports.postAddProducts=(req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop')
};
exports.getProducts=(req,res,next)=>{
    
    res.send('<h1>hello</h1>');
    
}