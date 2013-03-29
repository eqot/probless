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
        }
    });

    return Problem;
});
