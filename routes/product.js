var express = require('express');
var router = express.Router();
var db=require('../models/database');
var modelPro = require('./../models/product'); 

/* GET home page. */
router.get('/', function(req, res, next) {
    

    modelPro.list(function(listpro){ res.json(listpro)} );



});
router.get('/top5', function(req, res, next) {
    

  modelPro.listtop5(function(list){ res.json(list)} );


 
});
router.get('/date', function(req, res, next) {
    

  modelPro.listdate(function(listdate){ res.json(listdate)} );


 
});
router.get('/special', function(req, res, next) {
      

  modelPro.listSpecial(function(listspe){ res.json(listspe)} );



});
router.get('/:id', (req, res) => {
    let id = req.params.id;    
    modelPro.read(id, function(u){
      res.json(u);
    });
 });

 router.put('/:id', (req, res) => {
  let data = req.body;
      let id = req.params.id;
      modelPro.update(id, data, function(){
      })
});

 module.exports = router; 