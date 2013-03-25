/*global define */
define([
    'jquery',
    'backbone',
    'underscore',
    'text!template/problemView.html'
], function ($, Backbone, _, ProblemViewTemplate) {
    'use strict';

    var problemView = Backbone.View.extend({
        model: null,

        el: $('#view'),

        template: _.template(ProblemViewTemplate),

        initialize: function (model) {
            this.model = model;

            this.render();
        },

        destroy: function () {},

        render: function () {
            var view = this.template({problems: this.model});
            $(this.el).html(view);
        }
    });

    return problemView;
});
