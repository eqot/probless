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
            'click #signup': 'signup'
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
                password: $('#password').val()
            });
            // console.log(this.user);

            this.listenTo(this.user, 'invalid', this.invalidData);

            var result = this.user.validatePassword($('#password2').val());
            if (!result) {
                this.user.save();
            } else {
                console.log(result);
            }
        },

        invalidData: function (model, err) {
            console.log('Invalid: ' + err);
        }
    });

    return TopView;
});
