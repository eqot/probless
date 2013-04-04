/*global define */
define([
    'jquery',
    'backbone',
    'underscore',
    'models/user',
    'text!templates/top.html'
], function ($, Backbone, _, User, TopViewTemplate) {
    'use strict';

    var TopView = Backbone.View.extend({

        el: $('#view'),

        template: _.template(TopViewTemplate),

        events: {
            'click #signup': 'signup'
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
        },

        signup: function () {
            // console.log('sign up');

            var user = new User({
                nickname: $('#nickname').val(),
                password: $('#password').val(),
                password2: $('#password2').val()
            });
            // console.log(user);

            this.listenTo(user, 'invalid', this.invalidData);

            user.save();
        },

        invalidData: function (model, err) {
            console.log('Invalid: ' + err);
        }

    });

    return TopView;
});
