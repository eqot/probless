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

    return submitView;
});
