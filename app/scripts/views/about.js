/*global define */
define([
    'jquery',
    'backbone',
    'underscore',
    'text!templates/about.html'
], function ($, Backbone, _, AboutViewTemplate) {
    'use strict';

    var AboutView = Backbone.View.extend({

        el: $('#view'),

        template: _.template(AboutViewTemplate),

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
        }
    });

    return AboutView;
});
