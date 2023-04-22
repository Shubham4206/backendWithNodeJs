const path=require('path');
const Details=require('../modelmvc2/contactmvc2');
exports.getContactUs=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../',"viewmvc2","contactmvc2.html"));
}
exports.postContactUs=(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','viewmvc2','formmvc2.html'));
}
exports.success=(req,res,next)=>{
    const detail=new Details(req.body.name,req.body.email);
    const details=detail.save();
    
    // const details=[];
    // details.push({'name':req.body.name,'email':req.body.email});
    // console.log(details);
    res.send(`details are:${JSON.stringify(details)}`);
}