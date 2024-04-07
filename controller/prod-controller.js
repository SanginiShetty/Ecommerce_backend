let express= require("express");


let prod=(req,res)=>{
    res.send("Product Through Controller");
}


module.exports = prod;

