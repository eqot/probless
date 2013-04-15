/*global define */
define(['backbone'], function (Backbone) {
    'use strict';

    var User = Backbone.Model.extend({

        urlRoot: '/api/user',

        defaults: {
            nickname: '',
            password: ''
        },

        validate: function (attrs) {
            if (attrs.nickname.length === 0) {
                return 'Nickname is required';
            } else if (attrs.password.length === 0) {
                return 'Password is required';
            }
        },

        validatePassword: function (password2) {
            if (password2.length === 0) {
                return 'Password2 is required';
            } else if (this.get('password') !== password2) {
                return 'Passwords are different';
            }

            return false;
        },

        parse: function (res) {
            res.id = res._id;
            return res;
        }
    });

    return User;
});
