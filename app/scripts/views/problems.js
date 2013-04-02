/*global define */
define(['jquery', 'backbone', 'views/problem'], function ($, Backbone, ProblemView) {
    'use strict';

    var ProbemsView = Backbone.View.extend({

        el: $('#view'),

        events: {
            'click #submit': 'submitProblem'
        },

        initialize: function (problems) {
            this.problems = problems;
            this.render();

            this.listenTo(this.problems, 'add', this.renderProblem);
            this.listenTo(this.problems, 'reset', this.render);
            this.listenTo(this.problems, 'invalid', this.invalidData);
        },

        close: function () {
            this.stopListening();
        },

        render: function () {
            this.problems.each(function (problem) {
                this.renderProblem(problem);
            }, this);
        },

        renderProblem: function (problem) {
            // console.log(problem);
            var problemView = new ProblemView({
                model: problem
            });
            // console.log(problemView);
            $(this.el).append(problemView.render().el);
        },

        submitProblem: function (event) {
            event.preventDefault();

            var problemData = {};
            $('#submitProblem div').children('input').each(function (i, el) {
                if ($(el).val() !== '') {
                    problemData[el.id] = $(el).val();
                }
            });
            problemData.createdAt = null; // dummy

            console.log(problemData);

            this.problems.create(problemData);
        },

        invalidData: function (model, err) {
            console.log('Invalid: ' + err);
        }
    });

    return ProbemsView;

});
