/*global define */
define(['backbone'], function (Backbone) {
    'use strict';

    var Problem = Backbone.Model.extend({
        defaults: {
            title: '',
            description: '',
            tags: [],
            agree: 0,
            disagree: 0
        }
    });

    var Problems = Backbone.Collection.extend({
        model: Problem
    });

    return {
        Problem: Problem,
        Problems: Problems
    };
});
