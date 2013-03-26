
exports.submit = function (req, res, next) {
    console.log('Submit problem');

    var title = req.param('title');
    var description = req.param('description');
    var tags = req.param('tags');
    var nickname = req.param('nickname');
    console.log(title + ', ' + description + ', ' + tags + ', ' + nickname);

    res.send('Submit problem');
};
