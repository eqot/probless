/*global define */
define([
    'jquery',
    'backbone',
    'underscore',
    'text!template/signinView.html',
    'text!template/alert.html'
], function ($, Backbone, _, SigninViewTemplate, AlertTemplate) {
    'use strict';

    var signinView = Backbone.View.extend({
        el: $('#view'),

        viewTemplate: _.template(SigninViewTemplate),
        alertTemplate: _.template(AlertTemplate),

        nickname: null,

        events: {
            'click #signup': 'signup',
            'click #signin': 'signin'
        },

        initialize: function () {
            _.bindAll(this, 'onSignUp', 'onSignIn');

            if (sessionStorage.getItem('signin')) {
                // If already signed in, then sign out and go back to home
                sessionStorage.removeItem('signin');

                Backbone.history.navigate('', true);
                return;
            }

            this.render();
        },

        render: function () {
            var view = this.viewTemplate();

            $(this.el).html(view);
        },

        signup: function (event) {
            event.preventDefault();

            // console.log('sign up');
            var nickname = $('#up-nickname').val();
            var email = $('#up-email').val();
            var password = $('#up-password').val();
            var password2 = $('#up-password2').val();
            // console.log(nickname + ', ' + email + ', ' + password + ', ' + password2);

            if (this.check(nickname,  '#up-alert', 'Nickname is required.', '#up-nickname') &&
                this.check(password,  '#up-alert', 'Password is required.', '#up-password') &&
                this.check(password2, '#up-alert', 'Password is required.', '#up-password2') &&
                this.check(password === password2, '#up-alert', 'Password is not matched.', '#up-password')) {
            } else {
                return;
            }

            this.nickname = nickname;

            var data = {
                nickname: nickname,
                email: email,
                password: password
            };

            $.post('/user', data, this.onSignUp);
        },

        onSignUp: function (res) {
            if (res === 'signed up') {
                sessionStorage.setItem('signin', true);
                sessionStorage.setItem('nickname', this.nickname);
                // console.log(sessionStorage);

                Backbone.history.navigate('', true);
            } else {
                this.check(false, '#up-alert', 'Nickname or password is not matched.', '#up-nickname');
            }
        },

        signin: function (event) {
            event.preventDefault();

            // console.log('sign in');
            var nickname = $('#in-nickname').val();
            var password = $('#in-password').val();
            // console.log(nickname + ', ' + password);

            if (this.check(nickname, '#in-alert', 'Nickname is required.', '#in-nickname') &&
                this.check(password, '#in-alert', 'Password is required.', '#in-password')) {
            } else {
                return;
            }

            this.nickname = nickname;

            var data = {
                nickname: nickname,
                password: password
            };

            $.get('/user', data, this.onSignIn);
        },

        onSignIn: function (res) {
            if (res === 'signed in') {
                sessionStorage.setItem('signin', true);
                sessionStorage.setItem('nickname', this.nickname);
                // console.log(sessionStorage);

                Backbone.history.navigate('', true);
            } else {
                this.check(false, '#in-alert', 'Nickname or password is not matched.', '#in-nickname');
            }
        },

        check: function (condition, alertElement, alertMessage, focusedElement) {
            if (!condition) {
                var alert = this.alertTemplate({message: alertMessage});
                $(alertElement).empty().append(alert);

                if (focusedElement) {
                    $(focusedElement).focus();
                }
            }

            return condition;
        }
    });

    return signinView;
});
