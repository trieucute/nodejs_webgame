var db=require('./database'); 
exports.list = function( callback) { 
    let sql = `select * from products`;
    db.query(sql, function(err, d) {
    if (err) throw err;
        
        callback(d); }  );
}
exports.listtop5 = function( callback) { 
    let sql = `SELECT * FROM products ORDER BY views DESC LIMIT 5`;
    db.query(sql, function(err, d) {
    if (err) throw err;
        
        callback(d); }  );
}
exports.listSpecial = function( callback) { 
    let sql = `SELECT * FROM products WHERE special=1`;
    db.query(sql, function(err, d) {
    if (err) throw err;
        
        callback(d); }  );
}
exports.listdate = function( callback) { 
    let sql = `SELECT * FROM products ORDER BY date DESC`;
    db.query(sql, function(err, d) {
    if (err) throw err;
        
        callback(d); }  );
}
exports.update = function(id, data,callback) { 
    let sql = 'UPDATE products SET ? WHERE id_pro=?';
    db.query(sql, [data,id], (err, d) => {
        if (err) throw err;
        callback();
    });    
} 
exports.read= function(id, callback) {
    let sql = 'SELECT * FROM products  JOIN images ON products.id_pro=images.pro_id JOIN category On products.cate_id= category.id_cate where id_pro=?'    
    db.query(sql, id, (err, d) => {
        data = d[0]; 
        callback(data);
    });
} 
