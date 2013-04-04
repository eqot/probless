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
            'click #signup': 'signup',
            'click #signin': 'signin'
        },

        initialize: function () {
            $('#signin').click(this.signin);

            this.render();
        },

        render: function () {
            this.$el.html(this.template());
        },

        signup: function (event) {
            // console.log('sign up');

            event.preventDefault();

            var user = new User({
                nickname: $('#nickname').val(),
                password: $('#password').val(),
                password2: $('#password2').val()
            });
            // console.log(user);

            this.listenTo(user, 'invalid', this.invalidData);

            user.save();
        },

        signin: function (event) {
            // console.log('sign in');

            event.preventDefault();

            var user = new User({
                nickname: $('#in-nickname').val(),
                password: $('#in-password').val(),
                password2: $('#in-password').val()
            });
            // console.log(user);

            // this.listenTo(user, 'invalid', this.invalidData);

            user.save();
        },

        invalidData: function (model, err) {
            console.log('Invalid: ' + err);
        }

    });

    return TopView;
});
