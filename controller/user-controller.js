let express= require("express");

let use=(req,res)=>{
    
    res.send("User Through Controller");
}

module.exports = use;