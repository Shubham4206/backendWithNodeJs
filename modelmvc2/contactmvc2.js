const details=[];
module.exports=class Details{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    save(){
        details.push(this);
        return details;
    }
}