let express= require('express');

let proco= require("../controller/prod-controller"); 

let router=express.Router();

router.get('/product',proco.prod);
router.post('/product',proco.prodpost);
router.put('/product',proco.prodput);


module.exports=router;