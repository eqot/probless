
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

exports.delete = function  (req, res) {
    console.log('delete: ' + req.params.id);

    return Problem.findById(req.params.id, function (err, problem) {
        return problem.remove(function (err) {
            if (!err) {
                console.log('Problem removed');
                res.send('');
            } else {
                return console.log(err);
            }
        })
    });
};
