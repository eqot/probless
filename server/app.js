
var express = require('express'),
    routes = require('./routes'),
    user = require('./routes/user'),
    problem = require('./routes/problem'),
    http = require('http'),
    path = require('path'),
    models = require('./models');

var app = express();

app.configure(function(){
    app.set('port', process.env.PORT || 8000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session());
    app.use(function(req, res, next) {
        console.log('@@@@');
        console.log(req.session);
        next();
    });
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

// Dvelopement
app.configure('development', function(){
    models.init('localhost', 'probless_dev');
    app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

// Production
app.configure('production', function(){
    models.init('localhost', 'probless_prod');
});

// Test
app.configure('test', function(){
    models.init('localhost', 'probless_test');
    app.use(express.errorHandler());
});

app.post('/user', user.signup);
app.get('/user', user.signin);
app.post('/problem', problem.submit);

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
