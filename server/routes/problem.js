
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
        nickname: req.body.nickname,
        visible: req.body.visible,
        agree: req.body.agree,
        disagree: req.body.disagree
    });
    // console.log(problem);

    problem.save(function (err) {
        if (!err) {
            res.send(problem);
        } else {
            return console.log(err);
        }
    });
};

exports.update = function (req, res) {
    Problem.findById(req.params.id, function (err, problem) {
        problem.agree = req.body.agree;
        problem.disagree = req.body.disagree;

        problem.save(function (err) {
            if (!err) {
                console.log('Problem updated');
                res.send(problem);
            } else {
                return console.log(err);
            }
        });
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
