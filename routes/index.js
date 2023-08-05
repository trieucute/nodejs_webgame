var express = require('express');
var router = express.Router();
var db=require('../models/database');
var modelShop = require('../models/cate'); 

/* GET home page. */
router.get('/', function(req, res, next) {
    const user = req.session.user;
    res.render('home' ,{user});
}); 
router.get('/shop', (req, res) => {
  const user = req.session.user;

    res.render("shop",{user});
  });
router.get('/shop/cate/:id', (req, res) => {
  const user = req.session.user;

  let id= req.params.id;
    res.render("shop_cate",{id:id,user:user});
});
router.get('/shop/product/:id', (req, res) => {
  const user = req.session.user;

    let id= req.params.id;
      res.render("details",{id:id,user:user});
  });

  router.get('/login', (req, res) => {
  const user = req.session.user;

    res.render("login",{user});
  });
  router.get('/login/forgot', (req, res) => {
    // res.render("login_signin",{user});
    const user = req.session.user;
    if(user){
      res.redirect('/')
    }else{
      res.render("quenmk");

    }
  });
  router.get('/login/signin', (req, res) => {
    // res.render("login_signin",{user});
    const user = req.session.user;
    if(user){
      res.redirect('/')
    }else{
      res.render("login_signin");

    }
  });
  router.get('/login/signup', (req, res) => {
  const user = req.session.user;
    if(user){
      res.redirect('/')
    }else{
      res.render("login");

    }
  });
  router.get('/login/thoat', function(req, res) {
  const user = req.session.user;
    if(user){
      req.session.destroy();
      res.redirect("/login/signup");

    }else{
      res.status(404).render('error', { 
        title: 'Page not found', 
        message: 'The requested page cannot be found' 
      });

    }
  });
  router.get('/login/doipass', function(req, res) {
    const user = req.session.user;
      if(user){
        const username= user.username
        const pass= user.password

        res.render("doipass",{user:user,username:username, password:pass});
      }else{
        res.redirect("/login/signup");
      }
    });
    router.get('/login/fotgot', (req, res) => {
      const user = req.session.user;
        if(user){
          res.redirect('/')
        }else{
          res.render("quenmk");
    
        }
      });
module.exports = router;
