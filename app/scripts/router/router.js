/*global define */
define(['jquery', 'backbone', 'view/topView', 'view/signinView'], function ($, Backbone, TopView, SigninView) {
    'use strict';

    var ProblemRouter = Backbone.Router.extend({
        model: null,

        view: null,

        routes: {
            '': 'topView',
            'signin': 'signinView',
            ':uid': 'userView',
            'p/:pid': 'problemView'
        },

        initialize: function (model) {
            this.model = model;

            $('#signin-at-corner').click(function (event) {
                event.preventDefault();

                console.log('signin');
                Backbone.history.navigate('signin', true);
            });

            Backbone.history.start();
        },

        topView: function () {
            console.log('topView');

            this.updateSignInfo();

            new TopView(this.model);
        },

        signinView: function () {
            console.log('signinView');

            this.updateSignInfo();

            new SigninView();
        },

        userView: function (uid) {
            console.log('userView: ' + uid);
        },

        problemView: function (pid) {
            console.log('problemView: ' + pid);
        },

        updateSignInfo: function () {
            var signin = sessionStorage.getItem('signin');
            var nickname = sessionStorage.getItem('nickname');
            // console.log(signin + ', ' + nickname);

            $('#signin-at-corner').text(signin ? 'Sign out' : 'Sign in');
            $('#nickname').text(signin && nickname ? nickname : '');
        }

    });

    return ProblemRouter;
});
