var express = require('express');
var router = express.Router();
var db=require('../models/database');


router.get('/', function(req, res, next) {
    res.render('admin/index');
  });
router.get('/category_list', function(req, res, next) {
  let sqlcate = " select id_cate, name_cate from category";
  db.query(sqlcate, function(err, listcate){
    if(err) throw err;
    res.render('admin/category_list',{cate:listcate});
  })
});
router.get('/category_addnew', function(req, res, next) {
  res.render('admin/category_addnew');
});
router.post('/store', function(req, res, next) {
  // let id = req.body.id_cate;
  let name= req.body.name_cate;
  cate = { name_cate:name}  ;
  db.query('insert into category SET ?', cate, function(err, data) {
    if(err) throw err;
    res.redirect('/admin/category_list/');
  })
});
router.get('/category_edit/:id', function(req, res, next) {
  let id = req.params.id;
  let sqlcate = `select id_cate, name_cate from category where id_cate=${id}`;
  db.query(sqlcate, function(err, listcate){
    if(err) throw err;
    res.render('admin/category_edit',{cate:listcate[0]});
  })
});
router.post('/update', function(req, res, next) {
  let id = req.body.id_cate;
  let name= req.body.name_cate;
  cate = {name_cate:name}  ;
  db.query(`UPDATE category SET ? WHERE id_cate = ${id}`,  cate, function (err, listcate){
    if(err) throw err;
    res.redirect('/admin/category_list/');
  })
});
router.get('/category_detele/:id', function(req, res, next) {
  let id = req.params.id;
  let sqlcate = ` delete from category where id_cate=${id}`;
  db.query(sqlcate, function(err, listcate){
    if(err) throw err;
    
    res.redirect('/admin/category_list/');

  })
});
  
module.exports = router;
