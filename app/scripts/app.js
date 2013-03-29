/*global define */
define(['models/problems', 'views/problems'], function (Problems, ProblemsView) {
    'use strict';

    var ProblessApp = function () {
        var problems = new Problems([
            {title: 'test', description: 'test_desc'},
            {title: 'test 2', description: 'test_desc 2'},
        ]);

        new ProblemsView(problems);
    };

    return ProblessApp;
});
