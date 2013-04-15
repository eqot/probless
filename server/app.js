
var express = require('express'),
    user = require('./routes/user'),
    problem = require('./routes/problem'),
    http = require('http'),
    path = require('path');

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
    app.use(function (req, res, next) {
        console.log(req.session.user);
        if (req.session.user) {
            res.cookie('nickname', req.session.user.nickname, {expires: new Date(Date.now() + 900000)});
        }

        next();
    });
    app.use(app.router);
    app.use(express.static(path.join(__dirname, '../app')));
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

app.get('/api/problem', problem.get);
app.post('/api/problem', problem.add);
app.put('/api/problem/:id', problem.update);
app.delete('/api/problem/:id', problem.delete);

app.post('/api/user', user.signup);
app.put('/api/user/:id', user.signin);
app.delete('/api/user/:id', user.signout);

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});
