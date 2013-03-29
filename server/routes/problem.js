
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

exports.add = function (req, res) {
    var problem = new Problem({
        title: req.body.title,
        description: req.body.description,
        tags: req.body.tags,
        agree: req.body.agree,
        disagree: req.body.disagree
    });
    // console.log(problem);

    problem.save(function (err) {
        if (!err) {
            return console.log('Problem created');
        } else {
            return console.log(err);
        }

        res.send(problem);
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
