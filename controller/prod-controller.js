let express= require("express");


let prod=(req,res)=>{
    res.send("Product Through Controller");
}
let prodpost=(req,res)=>{
    res.status(201).send("Postman by post");
    
}
let prodput=(req,res)=>{
    res.send("Postman by put");
}

module.exports = {prod, prodpost, prodput};


