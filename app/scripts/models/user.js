/*global define */
define(['backbone'], function (Backbone) {
    'use strict';

    var User = Backbone.Model.extend({
        defaults: {
            nickname: '',
            email: '',
            password: '',
            password2: ''
        },

        varidate: function (attrs) {
            if (attrs.nickname.length === 0) {
                return 'Nickname is required';
            } else if (attrs.password.length === 0) {
                return 'Password is required';
            } else if (attrs.password2.length === 0) {
                return 'Password2 is required';
            } else if (attrs.password !== attrs.password2) {
                return 'Passwords are different';
            }
        },

        parse: function (res) {
            res.id = res._id;
            return res;
        }
    });

    return User;
});
