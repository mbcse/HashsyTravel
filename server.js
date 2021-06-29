const createError = require('http-errors');
const express = require('express');
const session = require("express-session");
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const uuid = require("uuid").v4;

/*
* Configuration files
*/
require("./config/handlebarHelpers");



/*
* Routers
*/
var indexRouter = require('./routes/index');
var dashboardRouter = require('./routes/dashboard');
var authRouter = require('./routes/auth');


/*
* Application set up
*/
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/web3", express.static(path.join(__dirname, '/node_modules/web3/dist')));
app.use("/blockchain", express.static(path.join(__dirname, '/public/web3')));
app.use(
  session({
    secret: "decentra-32887675-travel-000-95-maa",
    resave: false,
    saveUninitialized: true,
  })
);

/*
* Endpoints Routing setup
*/
app.use('/', indexRouter);
app.use('/dashboard', dashboardRouter);
app.use("/auth",authRouter);


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
