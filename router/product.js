let express= require('express');

let proco= require("../controller/prod-controller"); 

let router=express.Router();

router.get('/product',proco);

module.exports=router;