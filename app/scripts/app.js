/*global define */
define(['views/problems'], function (ProblemsView) {
    'use strict';

    var ProblessApp = function () {
        new ProblemsView();
    };

    return ProblessApp;
});
