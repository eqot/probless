/*global define */
define(['jquery', 'backbone', 'underscore', 'text!template/loginView.html'], function ($, Backbone, _, LoginViewTemplate) {
    'use strict';

    var loginView = Backbone.View.extend({
        model: null,

        el: $('#view'),

        template: _.template(LoginViewTemplate),

        initialize: function (model) {
            this.model = model;

            this.render();
        },

        render: function () {
            var view = this.template({problems: this.model});

            $(this.el).html(view);

            $('#login').click(function (event) {
                event.preventDefault();

                console.log('login');
                var nickname = $('#nickname').val();
                var email = $('#email').val();
                var password = $('#password').val();
                console.log(nickname + ', ' + email + ', ' + password);
            });
        }
    });

    return loginView;
});
