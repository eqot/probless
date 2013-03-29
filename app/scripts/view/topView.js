/*global define */
define([
    'jquery',
    'backbone',
    'underscore',
    'model/problem',
    'text!template/topView.html'
], function ($, Backbone, _, Problem, TopViewTemplate) {
    'use strict';

    var topView = Backbone.View.extend({
        model: null,

        el: $('#view'),

        events: {
            'click #submit': 'submit'
        },

        template: _.template(TopViewTemplate),

        initialize: function (model) {
            // this.model = model;
            this.model = new Problem.Problems();
            this.model.fetch();
            console.log(this.model);

            this.render();

            this.listenTo(this.model, 'add', this.renderProblem);
        },

        destroy: function () {
            $(this.el).undelegate('#submit', 'click');
        },

        render: function () {
            var view = this.template({problems: this.model});
            $(this.el).html(view);
        },

        renderProblem: function (problem) {
            console.log('ok');
            console.log(problem);
        },

        submit: function () {
            Backbone.history.navigate('problem', true);
        }
    });

    return topView;
});
