/*global define */
define([
    'jquery',
    'backbone',
    'underscore',
    'text!template/submitView.html'
], function ($, Backbone, _, SubmitViewTemplate) {
    'use strict';

    var submitView = Backbone.View.extend({
        model: null,

        el: $('#view'),

        template: _.template(SubmitViewTemplate),

        events: {
            'click #submit': 'submit'
        },

        initialize: function (model) {
            _.bindAll(this, 'onSubmit');

            this.model = model;

            this.render();
        },

        destroy: function () {
            $(this.el).undelegate('#submit', 'click');
        },

        render: function () {
            var view = this.template({problems: this.model});
            $(this.el).html(view);
        },

        submit: function () {
            console.log('submit');

            var title = $('#title').val();
            var description = $('#description').val();
            var tags = null;
            var nickname = $('#nickname-visible')[0].selectedIndex === 1;

            var data = {
                title: title,
                description: description,
                tags: tags,
                nickname: nickname ? sessionStorage.getItem('nickname') : ''
            };
            console.log(data);

            $.post('problem', data, this.onSubmit);
        },

        onSubmit: function () {
            console.log('onSubmit');
        }
    });

    return submitView;
});
