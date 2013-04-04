
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/account_dev');

var UserSchema = new mongoose.Schema({
    nickname: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

exports.User = mongoose.model('User', UserSchema);
