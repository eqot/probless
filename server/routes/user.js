
var utils = require('connect').utils;

exports.create = function (req, res) {
    var nickname = req.param('nickname');
    var email = req.param('email');
    var password = req.param('password');
    var password2 = req.param('password2');

    console.log(nickname + ', ' + email + ', ' + password + ', ' + password2);

    res.send("create: " + nickname);
};

exports.signin = function (req, res) {
    var nickname = req.param('nickname');
    var password = req.param('password');

    console.log(nickname + ', ' + password);

    res.send("sign in: " + nickname);
};

function getAuthCookie() {
    return utils.uid(32);
}
