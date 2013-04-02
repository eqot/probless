/*global define */
define([
    'backbone',
    'views/top',
    'views/problems'
], function (Backbone, TopView, ProblemsView) {
    'use strict';

    var Router = Backbone.Router.extend({

        routes: {
            '': 'topView',
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

        problemsView: function () {
            // console.log('problemsView');

            new ProblemsView();
        }
    });

    return Router;
});
