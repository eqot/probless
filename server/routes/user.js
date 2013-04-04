
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

