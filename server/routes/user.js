
var UserModel = require('../models/user'),
    User = UserModel.User;

exports.create = function (req, res, next) {
    var user = new User({
        nickname: req.body.nickname,
        password: req.body.password
    });
    console.log(user);

    user.save(function (err) {
        if (!err) {
            res.send(user);
        } else {
            return console.log(err);
        }
    });
};

exports.signin = function (req, res, next) {
    var userData = {
        nickname: req.body.nickname,
        password: req.body.password
    };
    console.log(userData);

    User.findOne(userData, function (err, user) {
        if (!err && user) {
            console.log('Sign in');
        } else {
            console.log(err);
        }

        console.log(user);
        res.send(user);
    });
};
