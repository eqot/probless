/*global define */
define(['backbone', 'view/topView', 'view/loginView'], function (Backbone, TopView, LoginView) {
    'use strict';

    var ProblemRouter = Backbone.Router.extend({
        model: null,

        view: null,

        routes: {
            '': 'topView',
            'login': 'loginView',
            ':uid': 'userView',
            'p/:pid': 'problemView'
        },

        initialize: function (model) {
            this.model = model;

            Backbone.history.start();
        },

        topView: function () {
            console.log('topView');

            new TopView(this.model);
        },

        loginView: function () {
            console.log('loginView');

            new LoginView(this.model);
        },

        userView: function (uid) {
            console.log('userView: ' + uid);
        },

        problemView: function (pid) {
            console.log('problemView: ' + pid);
        }
    });

    return ProblemRouter;
});
