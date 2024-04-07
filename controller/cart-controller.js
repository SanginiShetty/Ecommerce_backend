let express= require("express");

let car=(req,res)=>{
    
    res.send("Cart Through Controller");
}

module.exports = car;