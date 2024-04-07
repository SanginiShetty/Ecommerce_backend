let express=require('express');

let adminco= require("../controller/admin-controller");

let router = express.Router();

router.get('/admin',adminco);

module.exports=router;