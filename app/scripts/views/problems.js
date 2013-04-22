/*global define */
define([
    'jquery',
    'backbone',
    'underscore',
    'models/problems',
    'views/problem',
    'text!templates/problems.html'
], function ($, Backbone, _, Problems, ProblemView, ProblemsViewTemplate) {
    'use strict';

    var ProbemsView = Backbone.View.extend({

        el: $('#view'),

        template: _.template(ProblemsViewTemplate),

        events: {
            'click #submit': 'submitProblem'
        },

        initialize: function () {
            this.problems = new Problems();
            this.problems.fetch({reset: true});
            // console.log(this.problems);

            this.render();

            this.listenTo(this.problems, 'add', this.renderProblem);
            this.listenTo(this.problems, 'reset', this.render);
            this.listenTo(this.problems, 'invalid', this.invalidData);
        },

        close: function () {
            this.stopListening();
        },

        render: function () {
            this.$el.html(this.template());

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

            this.problems.create(problemData, {wait: true});
        },

        invalidData: function (model, err) {
            console.log('Invalid: ' + err);
        }
    });

    return ProbemsView;

});
