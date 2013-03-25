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
        model: null,

        el: $('#view'),

        viewTemplate: _.template(SigninViewTemplate),
        alertTemplate: _.template(AlertTemplate),

        events: {
            'click #signup': 'signup',
            'click #signin': 'signin'
        },

        initialize: function (model) {
            _.bindAll(this, 'onSignUp', 'onSignIn');

            this.model = model;

            this.render();
        },

        render: function () {
            var view = this.viewTemplate({problems: this.model});

            $(this.el).html(view);
        },

        signup: function (event) {
            event.preventDefault();

            console.log('sign up');
            var nickname = $('#up-nickname').val();
            var email = $('#up-email').val();
            var password = $('#up-password').val();
            var password2 = $('#up-password2').val();
            console.log(nickname + ', ' + email + ', ' + password + ', ' + password2);

            var alert;
            if (!nickname) {
                alert = this.alertTemplate({message: 'Nickname is required'});
                $('#up-alert').empty().append(alert);

                $('#up-nickname').focus();

                return;
            }

            if (!password) {
                alert = this.alertTemplate({message: 'Password is required.'});
                $('#up-alert').empty().append(alert);

                $('#up-password').focus();

                return;
            }

            if (!password2) {
                alert = this.alertTemplate({message: 'Password is required.'});
                $('#up-alert').empty().append(alert);

                $('#up-password2').focus();

                return;
            }

            if (password !== password2) {
                alert = this.alertTemplate({message: 'Password is not matched.'});
                $('#up-alert').empty().append(alert);

                $('#up-password').focus();

                return;
            }

            var data = {
                nickname: nickname,
                email: email,
                password: password
            };

            $.post('/user', data, this.onSignUp);
        },

        onSignUp: function (res) {
            if (res === 'signed up') {
                Backbone.history.navigate('', true);
            } else {
                var alert = this.alertTemplate({message: 'Nickname or password is not matched.'});
                $('#up-alert').empty().append(alert);
            }
        },

        signin: function (event) {
            event.preventDefault();

            console.log('sign in');
            var nickname = $('#in-nickname').val();
            var password = $('#in-password').val();
            console.log(nickname + ', ' + password);

            var alert;
            if (!nickname) {
                alert = this.alertTemplate({message: 'Nickname is required.'});
                $('#in-alert').empty().append(alert);

                $('#in-nickname').focus();

                return;
            }

            if (!password) {
                alert = this.alertTemplate({message: 'Password is required.'});
                $('#in-alert').empty().append(alert);

                $('#in-password').focus();

                return;
            }

            var data = {
                nickname: nickname,
                password: password
            };

            $.get('/user', data, this.onSignIn);
        },

        onSignIn: function (res) {
            if (res === 'signed in') {
                Backbone.history.navigate('', true);
            } else {
                var alert = this.alertTemplate({message: 'Nickname or password is not matched.'});
                $('#in-alert').empty().append(alert);
            }
        }
    });

    return signinView;
});
