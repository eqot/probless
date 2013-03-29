/*global define */
define(['backbone', 'underscore', 'text!templates/problem.html'], function (Backbone, _, ProblemTemplate) {
    'use strict';

    var ProblemView = Backbone.View.extend({

        tagName: 'div',
        className: 'problemContainer',
        template: _.template(ProblemTemplate),

        events: {
            'click .delete': 'delete'
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        delete: function () {
            this.model.destroy();

            this.remove();
        }

    });

    return ProblemView;

});
