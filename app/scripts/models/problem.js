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
            if (attrs.title.length === 0) {
                return 'Title is required';
            }
        },

        parse: function (res) {
            res.id = res._id;
            return res;
        }
    });

    return Problem;
});
