var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var session = require('express-session');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: '1562753877snq',
  resave: false,
  saveUninitialized: true,
}));


//  app.use('/', indexRouter);
//app.use('/users', usersRouter);

app.get('/', function (req, res) {
  var conocido = Boolean(req.session.numero1);


  res.render('index', {
    title: 'Calculadora',
    conocido: conocido,
    numero1: req.session.numero1,
    numero2: req.session.numero2,
    resultado: req.session.resultado,
    operacion: req.session.operacion,
  });
});
app.post('/ingresar1', function (req, res) {
  if (req.body.numero1) {
    req.session.numero1 = req.body.numero1
    req.session.numero2 = req.body.numero2
    req.session.operacion = req.body.operacion
    if (req.session.operacion == 'suma') {
      req.session.resultado = parseFloat(req.session.numero2) + parseFloat(req.session.numero1)
    }
    if (req.session.operacion == 'resta') {
      req.session.resultado = parseFloat(req.session.numero2) - parseFloat(req.session.numero1)
    }
    if (req.session.operacion == 'multiplicar') {
      req.session.resultado = parseFloat(req.session.numero2) * parseFloat(req.session.numero1)
    }
    if (req.session.operacion == 'dividir') {
      req.session.resultado = parseFloat(req.session.numero2) / parseFloat(req.session.numero1)
    }
  }
  res.redirect('/');
});


app.get('/salir', function (req, res) {
  req.session.destroy();
  res.redirect('/');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
