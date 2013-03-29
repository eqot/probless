/*global define */
define(['jquery', 'backbone', 'views/problem'], function ($, Backbone, ProblemView) {
    'use strict';

    var ProbemsView = Backbone.View.extend({

        el: $('#view'),

        initialize: function (problems) {
            this.problems = problems;
            this.render();
        },

        render: function () {
            this.problems.each(function (problem) {
                this.renderProblem(problem);
            }, this);
        },

        renderProblem: function (problem) {
            console.log(problem);
            var problemView = new ProblemView({
                model: problem
            });
            console.log(problemView);
            $(this.el).append(problemView.render().el);
        }

    });

    return ProbemsView;

});
