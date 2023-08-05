var express = require('express');
var router = express.Router();
var db=require('../models/database');

/* GET users listing. */
router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
let sqlcate = " select id_cate, name_cate from category";
db.query(sqlcate, function(err, listcate){
    if(err) throw err;
    res.render('login' ,{cate:listcate})
})
}); 

module.exports = router;