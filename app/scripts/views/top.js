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

        user: null,

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

            this.user = new User({
                nickname: $('#nickname').val(),
                password: $('#password').val(),
                password2: $('#password2').val()
            });
            // console.log(user);

            this.listenTo(user, 'invalid', this.invalidData);

            this.user.save();
        },

        signin: function (event) {
            event.preventDefault();

            if (!this.user) {
                console.log('sign in');

                this.user = new User({
                    nickname: $('#in-nickname').val(),
                    password: $('#in-password').val(),
                    password2: $('#in-password').val(),
                    id: 'dummy'
                });
                // console.log(user);

                // this.listenTo(user, 'invalid', this.invalidData);

                this.user.save({}, {
                    success: function (model, res) {
                    // console.log(model);
                        console.log(res);

                        $('.signedout')
                            .removeClass('signedout')
                            .addClass('signedin');
                        $('#in-nickname').addClass('uneditable-input').attr('disabled', true);
                        $('#signin').text('Sign out');
                    },
                    error: function (model, xhr) {
                        console.log('error');
                    }
                });
            } else {
                console.log('sign out');

                this.user.destroy();
                this.user = null;

                $('.signedin')
                    .removeClass('signedin')
                    .addClass('signedout');
                $('#in-nickname').removeClass('uneditable-input').removeAttr('disabled');
                $('#signin').text('Sign in');
            }
        },

        invalidData: function (model, err) {
            console.log('Invalid: ' + err);
        }
    });

    return TopView;
});
