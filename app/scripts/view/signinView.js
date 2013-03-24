/*global define */
define(['jquery', 'backbone', 'underscore', 'text!template/signinView.html'], function ($, Backbone, _, SigninViewTemplate) {
    'use strict';

    var signinView = Backbone.View.extend({
        model: null,

        el: $('#view'),

        template: _.template(SigninViewTemplate),

        initialize: function (model) {
            this.model = model;

            this.render();
        },

        render: function () {
            var view = this.template({problems: this.model});

            $(this.el).html(view);

            $('#signup').click(function (event) {
                event.preventDefault();

                console.log('sign up');
                var nickname = $('#up-nickname').val();
                var email = $('#up-email').val();
                var password = $('#up-password').val();
                var password2 = $('#up-password2').val();
                console.log(nickname + ', ' + email + ', ' + password + ', ' + password2);

                var data = {
                    nickname: nickname,
                    email: email,
                    password: password,
                    password2: password2
                };

                $.post('/user', data, function (res) {
                    console.log(res);
                });
            });

            $('#signin').click(function (event) {
                event.preventDefault();

                console.log('sign in');
                var nickname = $('#in-nickname').val();
                var password = $('#in-password').val();
                console.log(nickname + ', ' + password);

                var data = {
                    nickname: nickname,
                    password: password
                };

                $.get('/user', data, function (res) {
                    console.log(res);
                });
            });
        }
    });

    return signinView;
});
