/*global define */
define([
    'jquery',
    'backbone',
    'text!templates/top.html'
], function ($, Backbone, TopViewTemplate) {

    var TopView = Backbone.View.extend({

        el: $('#view'),

        template: _.template(TopViewTemplate),

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
        }

    });

    return TopView;
});
