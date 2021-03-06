require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        jqueryCookie: '../components/jquery.cookie/jquery.cookie',
        jqueryDateFormat: '../components/jquery-dateFormat/jquery.dateFormat-1.0',
        underscore: '../components/underscore/underscore-min',
        backbone: '../components/backbone/backbone-min',
        text: '../components/requirejs-text/text',
        bootstrap: 'vendor/bootstrap'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'bootstrap'], function (app) {
    'use strict';

    app();
});
