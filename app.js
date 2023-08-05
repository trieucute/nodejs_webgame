var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var nodemailer = require('nodemailer');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');  
var cateRouter = require('./routes/cate'); 
var prosRouter = require('./routes/product');

// var loginRouter = require('./routes/login');
var adminRouter = require('./routes/admin_cate');
var adminProRouter = require('./routes/admin_pro');




var app = express();
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password'
  }
});
app.use(session({
  secret: 'abcdefg',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter); 
app.use('/category', cateRouter);
app.use('/product', prosRouter);  

// app.use('/login', loginRouter);

app.use('/admin', adminRouter);
app.use('/admin', adminProRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
