let express=require("express");

let app= express();

const PORT= 5000;

let getProduct= require("./router/product");
app.use(getProduct);

app.listen(PORT, (req,res)=>{
    console.log("Server running on port "+`${PORT}`);
})

