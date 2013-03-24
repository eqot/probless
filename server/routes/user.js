
var models = require('../models'),
    User = models.UserModel;

exports.signup = function (req, res, next) {
    var nickname = req.param('nickname');
    var email = req.param('email');
    var password = req.param('password');
    var password2 = req.param('password2');

    console.log(nickname + ', ' + email + ', ' + password + ', ' + password2);

    var user = User({
        nickname: nickname,
    });
    user.setPassword(password, password2);
    if (email) {
        user.email = email;
    }

    user.save(function (err, result) {
        if (err) {
            if (err.code === 11000) {
                res.send('Used nickname');
            }

            if (err.name === 'ValidationError') {
                if (err.errors.password_mismatch) {
                    res.send('Password mismatch');
                } else {
                    res.send('Another error');
                }
            }

            return next(err);
        }

        console.log(result);

        req.session.nickname = result.nickname;

        res.send('signed up');
        return;
    });
};

exports.signin = function (req, res) {
    var nickname = req.param('nickname');
    var password = req.param('password');

    console.log(nickname + ', ' + password);

    var condition = {
        nickname: nickname,
        password: password
    };
    User.findOne(condition, function (err, result) {
        if (err) {
            res.send('error');
            return;
        }
        if (!result) {
            res.send('result error');
            return;
        }

        console.log(result);

        req.session.nickname = result.nickname;
        // console.log('!!!');
        // console.log(req.session);

        res.send('signed in');
        return;
    });
};
