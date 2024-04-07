let express= require("express")


let prod=(req,res)=>{
    res.send("Through Controller")
}

module.exports = prod;

