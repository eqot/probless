
var UserModel = require('../models/user'),
    User = UserModel.User;

exports.signup = function (req, res, next) {
    var user = new User({
        nickname: req.body.nickname,
        password: req.body.password
    });
    // console.log(user);

    user.save(function (err) {
        if (!err) {
            console.log('Sign up');
            req.session.user = user;
        } else {
            console.log(err);
        }

        res.send(user);
    });
};

exports.signin = function (req, res, next) {
    var userData = {
        nickname: req.body.nickname
    };
    if (!(req.session.user && (req.session.user.nickname === req.body.nickname))) {
        userData.password = req.body.password;
    }
    // console.log(userData);

    User.findOne(userData, function (err, user) {
        if (!err && user) {
            console.log('Sign in');
            req.session.user = user;
        } else {
            console.log(err);
        }

        // console.log(user);
        res.send(user);
    });
};

exports.signout = function (req, res, next) {
    req.session.destroy();
    res.send('ok');
};
