/*global define */
define([
    'jquery',
    'backbone',
    'underscore',
    'model/problem',
    'text!template/problemView.html'
], function ($, Backbone, _, Problem, ProblemViewTemplate) {
    'use strict';

    var problemView = Backbone.View.extend({
        model: null,
        pid: null,

        el: $('#view'),

        template: _.template(ProblemViewTemplate),

        initialize: function (model, pid) {
            _.bindAll(this, 'render');

            this.model = model;
            this.pid = pid;

            var data = {
                pid: this.pid
            };
            // $.get('problem', data, this.render);

            var problem = new Problem.Problem();
            problem.fetch();
            console.log(problem);
        },

        destroy: function () {},

        render: function (result) {
            console.log(result);

            var view = this.template({
                title: result.title,
                description: result.description,
                tags: result.tags,
                nickname: result.nickname,
                created_at: result.created_at
            });
            $(this.el).html(view);

            $('#title').val(result.title);
            $('#description').val(result.description);
            // $('#nickname').val(result.nickname);
            $('#nickname').text('test');
            console.log($('#nickname'));
        }
    });

    return problemView;
});
