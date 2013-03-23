/*global define */
define(['model/problem', 'router/router'], function (Model, Router) {
    'use strict';

    var app = function () {
        var model = new Model.Problems([{
            'title': 'test',
            'agree': 3
        }, {
            'title': 'test 2',
            'agree': 23
        }]);
        // console.log(model);

        new Router(model);
    };

    return app;
});
