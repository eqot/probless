/*global define */
define([
    'jquery',
    'backbone',
    'underscore',
    'text!template/submitView.html'
], function ($, Backbone, _, SubmitViewTemplate) {
    'use strict';

    var submitView = Backbone.View.extend({
        model: null,

        el: $('#view'),

        template: _.template(SubmitViewTemplate),

        events: {
            'click #submit': 'submit'
        },

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
            console.log('submit');
        }
    });

    return submitView;
});
