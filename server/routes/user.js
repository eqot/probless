
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
        } else {
            console.log(err);
        }

        res.send(user);
    });
};

exports.signin = function (req, res, next) {
    var userData = {
        nickname: req.body.nickname,
        password: req.body.password
    };
    // console.log(userData);

    User.findOne(userData, function (err, user) {
        if (!err && user) {
            console.log('Sign in');
        } else {
            console.log(err);
        }

        // console.log(user);
        res.send(user);
    });
};
