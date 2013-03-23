/*global define */
define(['model/problem', 'router/router'], function (Model, Router) {
    'use strict';

    var app = function () {
        var model = new Model.Problems([{
            'title': 'test',
            'description': 'foo bar',
            'agree': 3
        }, {
            'title': 'test 2',
            'description': 'foo bar 2',
            'agree': 23
        }, {
            'title': 'test 3',
            'description': 'foo bar 3',
            'agree': 23
        }, {
            'title': 'test 4',
            'description': 'foo bar 4',
            'agree': 23
        }, {
            'title': 'test 5',
            'description': 'foo bar 5',
            'agree': 23
        }]);
        // console.log(model);

        new Router(model);
    };

    return app;
});
