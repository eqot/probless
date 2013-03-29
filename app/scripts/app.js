/*global define */
define(['models/problems', 'views/problems'], function (Problems, ProblemsView) {
    'use strict';

    var ProblessApp = function () {
        var problems = new Problems();
        problems.fetch();
        // console.log(problems);

        new ProblemsView(problems);
    };

    return ProblessApp;
});
