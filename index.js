let express=require("express");

let app= express();

const PORT= 4000;

let getProduct= require("./router/product");
let getUser= require("./router/user");
let getReview= require("./router/review");
let getOrder= require("./router/order");
letAdmin= require("./router/admin");

app.use(getProduct);
app.use(getUser);
app.use(getReview);
app.use(getOrder);
app.use(getAdmin);

app.listen(PORT, (req,res)=>{
    console.log("Server running on port "+`${PORT}`);
})

