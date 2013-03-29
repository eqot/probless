/*global define */
define(['models/problems', 'views/problems'], function (Problems, ProblemsView) {
    'use strict';

    var ProblessApp = function () {
        var problems = new Problems();
        problems.fetch();

        new ProblemsView(problems);
    };

    return ProblessApp;
});
