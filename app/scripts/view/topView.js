/*global define */
define([
    'jquery',
    'backbone',
    'underscore',
    'text!template/topView.html'
], function ($, Backbone, _, TopViewTemplate) {
    'use strict';

    var topView = Backbone.View.extend({
        model: null,

        el: $('#view'),

        events: {
            'click #submit': 'submit'
        },

        template: _.template(TopViewTemplate),

        initialize: function (model) {
            this.model = model;

            this.render();
        },

        destroy: function () {
            $(this.el).undelegate('#submit', 'click');
        },

        render: function () {
            var view = this.template({problems: this.model});
            $(this.el).html(view);
        },

        submit: function () {
            Backbone.history.navigate('problem', true);
        }
    });

    return topView;
});
