let express=require('express');

let cartco= require("../controller/user-controller");

let router = express.Router();

router.get('/cart',cartco);

module.exports=router;