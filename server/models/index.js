
var mongoose = require('mongoose'),
    utils = require('connect').utils;

exports.init = function (host, db) {
    mongoose.connect('mongodb://' + host + '/' + db);
};

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    nickname: {type: String, required: true, unique: true},
    email: {type: String},
    password: {type: String, required: true},
    authcookie: {type: String, required: true, default: getAuthCookie},
    created_at: {type: Date, default: Date.now}
});

UserSchema.methods.setPassword = function (password, password2) {
    if (password === password2) {
        this.password = password;
        return true;
    }

    this.invalidate('password_mismatch', new Error('Password mismatch'));
    return false;
};

function getAuthCookie() {
    return utils.uid(32);
}

exports.UserModel = mongoose.model('User', UserSchema);
