var express = require('express');
var router = express.Router();
var db=require('../models/database');
var modelShop = require('../models/cate'); 

/* GET home page. */
router.get('/', function(req, res, next) {
     
    // let sqlcate = " select * from category";
    // let sqlIdCate= `select * from products`;
    // db.query(sqlcate, function(err, listcates){
    //     if(err) throw err;
    //     db.query(sqlIdCate, function(err, listcate){
    //         if(err) throw err;
    //         res.render('shop',{cate:listcates, list: listcate});
            

    //     })
    // })
    modelShop.list(function(listcate){ res.json(listcate)} );
    

});
router.get('/:id', (req, res) => {
    let id = req.params.id;    
    modelShop.read(id, function(u){
      res.json(u);
    });
 });
// router.get('/cate/:id_cate', function(req, res, next) {
//     let id = req.params.id_cate;
//     let sqlcate = " select * from category";
//     let sqlIdCate= `select * from products where cate_id =${id}`;
//     db.query(sqlcate, function(err, listcates){
//         if(err) throw err;
//         db.query(sqlIdCate, function(err, listcate){
//             if(err) throw err;
//             res.render('shop',{cate:listcates, list: listcate});
//             console.log(id);

//         })
//     })

// });
// router.get('/product/:id_pro', function(req, res, next) {
//     let pro=req.params.id_pro;
//     let sqlcate = " select * from category ";
//     let sqlIdPro= `SELECT * FROM products  JOIN images ON products.id_pro=images.pro_id JOIN category On products.cate_id= category.id_cate where id_pro=${pro}`;
//     let sqlviews='SELECT * FROM products ORDER BY views DESC LIMIT 5';
//     let updateview=`UPDATE products SET views = views + 1 WHERE id_pro=${pro}`;
//     db.query(sqlcate, function(err, listcates){
//         if(err) throw err;
//         db.query(sqlIdPro, function(err, listpro){
//             if(err) throw err;
//             db.query(sqlviews, function(err, views){
//                 if(err) throw err;
//                 db.query(updateview, function(err, result) {
//                     if (err) throw err;
//                     res.render('details',{cate:listcates, pro: listpro, view:views});
//                     console.log(`Views of product ${pro} has been updated.`);
//                     // Tiếp tục hiển thị trang chi tiết sản phẩm với thông tin mới nhất.
                    
//                   });
    
//             })

//         })
//     })

// });

module.exports = router;
