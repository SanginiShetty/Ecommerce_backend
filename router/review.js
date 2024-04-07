let express= require('express');

let revco= require("../controller/review-controller");
let router= express.Router();
router.get('/review',revco);
module.exports = router;