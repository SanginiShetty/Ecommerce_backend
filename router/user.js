let express=require('express');

let userco= require("../controller/user-controller");

let router = express.Router();

router.get('/user',userco);

module.exports=router;