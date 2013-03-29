
var ProblemModel = require('../models/problem'),
    Problem = ProblemModel.Problem;

exports.get = function (req, res) {
    return Problem.find(function (err, problems) {
        if (!err) {
            res.send(problems);
        } else {
            return console.log(err);
        }
    });
};
