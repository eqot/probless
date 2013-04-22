
var mongoose = require('mongoose');

mongoose.createConnection('mongodb://localhost/probless_dev');

var ProblemSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String},
    tags: {type: String},
    nickname: {type: String},
    visible: {type: Boolean},
    agree: {type: Number},
    disagree: {type: Number},
    createdAt: {type: Date, default: Date.now}
});

exports.Problem = mongoose.model('Problem', ProblemSchema);
