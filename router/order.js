let express=require('express');

let orderco= require("../controller/order-controller");

let router = express.Router();

router.get('/order',orderco);

module.exports=router;