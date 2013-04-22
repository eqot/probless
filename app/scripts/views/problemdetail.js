/*global define */
define([
    'jquery',
    'backbone',
    'underscore'
], function ($, Backbone) {
    'use strict';

    var ProblemDetailView = Backbone.View.extend({
        el: $('#view'),

        initialize: function () {
            console.log('ProblemDetailView');
        }
    });

    return ProblemDetailView;
});
