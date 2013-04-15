/*global define */
define(['backbone'], function (Backbone) {
    'use strict';

    var User = Backbone.Model.extend({

        urlRoot: '/api/user',

        defaults: {
            nickname: '',
            password: '',
            password2: ''
        },

        validate: function (attrs) {
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
