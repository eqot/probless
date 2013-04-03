/*global define */
define([
    'backbone',
    'views/top',
    'views/about',
    'views/problems'
], function (Backbone, TopView, AboutView, ProblemsView) {
    'use strict';

    var Router = Backbone.Router.extend({

        routes: {
            '': 'topView',
            'about': 'aboutView',
            'problems': 'problemsView'
        },

        initialize: function () {
            console.log('init');
            Backbone.history.start();
        },

        topView: function () {
            console.log('topView');

            new TopView();
        },

        aboutView: function () {
            console.log('aboutView');

            new AboutView();
        },

        problemsView: function () {
            // console.log('problemsView');

            new ProblemsView();
        }
    });

    return Router;
});
