/*global define */
define(['backbone', 'underscore', 'text!templates/problem.html'], function (Backbone, _, ProblemTemplate) {
    'use strict';

    var ProblemView = Backbone.View.extend({

        tagName: 'div',
        className: 'problemContainer',
        template: _.template(ProblemTemplate),

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            console.log(this.$el);
            return this;
        }

    });

    return ProblemView;

});
