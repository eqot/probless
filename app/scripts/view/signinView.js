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

            $('#signin').click(function (event) {
                event.preventDefault();

                console.log('signin');
                var nickname = $('#nickname').val();
                var email = $('#email').val();
                var password = $('#password').val();
                console.log(nickname + ', ' + email + ', ' + password);
            });
        }
    });

    return signinView;
});
