/*global define */
define(['jquery', 'backbone', 'underscore', 'text!template/topView.html'], function ($, Backbone, _, TopViewTemplate) {
    'use strict';

    var topView = Backbone.View.extend({
        model: null,

        el: $('#view'),

        template: _.template(TopViewTemplate),

        initialize: function (model) {
            this.model = model;

            this.render();
        },

        render: function () {
            var view = this.template({problems: this.model});

            $(this.el).append(view);
        }
    });

    return topView;
});
