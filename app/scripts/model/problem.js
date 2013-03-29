/*global define */
define(['backbone'], function (Backbone) {
    'use strict';

    var Problem = Backbone.Model.extend({
        defaults: {
            title: '',
            description: '',
            tags: [],
            nickname: '',
            agree: 0,
            disagree: 0
        },

        validate: function (attrs) {
            if (attrs.title === undefined || attrs.title.length === 0)  {
                return 'Title is required.';
            }
        }
    });

    var Problems = Backbone.Collection.extend({
        model: Problem,

        url: '/problem'
    });

    return {
        Problem: Problem,
        Problems: Problems
    };
});
