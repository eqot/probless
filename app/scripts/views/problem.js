/*global define */
define(['backbone', 'underscore', 'text!templates/problem.html'], function (Backbone, _, ProblemTemplate) {
    'use strict';

    var ProblemView = Backbone.View.extend({

        tagName: 'div',
        className: 'problemContainer',
        template: _.template(ProblemTemplate),

        events: {
            'click .agree': 'agree',
            'click .disagree': 'disagree',
            'click .delete': 'delete'
        },

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        agree: function () {
            this.model.save({
                agree: this.model.get('agree') + 1
            });
        },

        disagree: function () {
            this.model.save({
                disagree: this.model.get('disagree') + 1
            });
        },

        delete: function () {
            this.model.destroy();

            this.remove();
        }

    });

    return ProblemView;

});
