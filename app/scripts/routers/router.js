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
            'problem': 'problemView'
        },

        initialize: function () {
            console.log('init');
            Backbone.history.start();
        },

        topView: function () {
            console.log('topView');

            new TopView();
        },

        problemView: function () {
            console.log("problemView");

            new ProblemsView();
        }
    });

    return Router;
});
