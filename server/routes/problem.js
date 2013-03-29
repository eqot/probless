
var models = require('../models'),
    Problem = models.ProblemModel;

exports.submit = function (req, res, next) {
    console.log('Submit problem');

    var title = req.param('title');
    var description = req.param('description');
    var tags = req.param('tags');
    var nickname = req.param('nickname');
    console.log(title + ', ' + description + ', ' + tags + ', ' + nickname);

    var problem = new Problem({
        title: title,
        description: description,
        tags: tags,
        nickname: nickname
    });

    problem.save(function (err, result) {
        if (err) {
            if (err.code === 11000) {
                res.send('Error 11000');
            }

            if (err.name === 'ValidationError') {
                res.send('ValidationError');
            }

            return next(err);
        }

        console.log(result);

        res.send(result._id);
        return;
    });
};

exports.get = function (req, res, next) {
    Problem.find(function (err, problems) {
        if (!err) {
            console.log(problems);
            return res.send(problems);
        } else {
            return console.log(err);
        }
    });
};
