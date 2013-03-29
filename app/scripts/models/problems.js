/*global define */
define(['backbone', 'models/problem'], function (Backbone, Problem) {
    'use strict';

    var Problems = Backbone.Collection.extend({
        model: Problem
    });

    return Problems;

});
