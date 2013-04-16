/*global define */
define([
    'jquery',
    'backbone',
    'models/user',
    'views/top',
    'views/about',
    'views/problems',
    'jqueryCookie'
], function ($, Backbone, User, TopView, AboutView, ProblemsView) {
    'use strict';

    var Router = Backbone.Router.extend({
        view: null,

        user: null,

        routes: {
            '': 'topView',
            'about': 'aboutView',
            'problems': 'problemsView'
        },

        initialize: function () {
            // console.log('init');

            _.bindAll(this, 'sign');

            Backbone.history.start();

            $('#signin').click(this.sign);

            var nickname = $.cookie('nickname');
            if (nickname) {
                this.signin(nickname);
            }
        },

        topView: function () {
            console.log('topView');

            this.removeOldView();

            new TopView();
        },

        aboutView: function () {
            console.log('aboutView');

            this.removeOldView();

            new AboutView();
        },

        problemsView: function () {
            // console.log('problemsView');

            this.removeOldView();

            new ProblemsView();
        },

        removeOldView: function () {
            // console.log('removeOldView');

            if (this.view && this.view.destroy !== undefined) {
                this.view.destroy();
                this.view = null;
            }
        },

        sign: function () {
            console.log('sign');
            if (!this.user) {
                this.signin($('#in-nickname').val(), $('#in-password').val());
            } else {
                this.signout();
            }
        },

        signin: function (nickname, password) {
            console.log('sign in');

            var user = new User({
                nickname: nickname,
                password: password || '*',
                id: '*'
            });
            // console.log(user);

            this.listenTo(user, 'invalid', this.invalidData);

            var that = this;
            user.save({}, {
                success: function (model) {
                    // console.log(model);
                    that.user = model;

                    $('.signedout')
                        .removeClass('signedout')
                        .addClass('signedin');
                    $('#in-nickname')
                        .addClass('uneditable-input')
                        .attr('disabled', true)
                        .val(that.user.get('nickname'));
                    $('#signin').text('Sign out');
                },
                error: function () {
                    console.log('error');
                }
            });
        },

        signout: function () {
            console.log('sign out');

            this.user.destroy();
            this.user = null;

            $('.signedin')
                .removeClass('signedin')
                .addClass('signedout');
            $('#in-nickname').removeClass('uneditable-input').removeAttr('disabled');
            $('#signin').text('Sign in');
        },

        invalidData: function (el, error) {
            console.log('invalid');
            console.log(error);
        }
    });

    return Router;
});
