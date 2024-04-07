
let express=require("express");

let app= express();

const PORT= 5000;

let getProduct= require("./router/product");
let getUser= require("./router/user");
let getReview= require("./router/review");
let getOrder= require("./router/order");
let getAdmin= require("./router/admin");
let getCart= require("./router/cart");

app.use(getProduct);
app.use(getUser);
app.use(getReview);
app.use(getOrder);
app.use(getAdmin);
app.use(getCart);

app.listen(PORT, (req,res)=>{
    console.log("Server running on port "+`${PORT}`);
})

