require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        bootstrap: 'vendor/bootstrap',
        backbone: '../components/backbone/backbone-min',
        underscore: '../components/underscore/underscore-min',
        text: '../components/requirejs-text/text'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        'underscore': {
            exports: '_',
        },
        'backbone': {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
    }
});

require(['app'], function (app) {
    'use strict';

    app();
});
