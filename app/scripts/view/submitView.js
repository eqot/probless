/*global define */
define([
    'jquery',
    'backbone',
    'underscore',
    'text!template/submitView.html',
    'text!template/alert.html'
], function ($, Backbone, _, SubmitViewTemplate, AlertTemplate) {
    'use strict';

    var submitView = Backbone.View.extend({
        model: null,

        el: $('#view'),

        viewTemplate: _.template(SubmitViewTemplate),
        alertTemplate: _.template(AlertTemplate),

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
            var view = this.viewTemplate({problems: this.model});
            $(this.el).html(view);
        },

        submit: function () {
            // console.log('submit');

            var title = $('#title').val();
            var description = $('#description').val();
            var tags = null;
            var nickname = $('#nickname-visible')[0].selectedIndex === 1;

            if (this.check(title && title !== '', '#submit-alert', 'Title is required.', '#title')) {
            } else {
                return;
            }

            var data = {
                title: title,
                description: description,
                tags: tags,
                nickname: nickname ? sessionStorage.getItem('nickname') : ''
            };
            console.log(data);

            $.post('problem', data, this.onSubmit);
        },

        onSubmit: function (result) {
            console.log('onSubmit');
            console.log(result);

            if (result) {
                Backbone.history.navigate('problem/' + result, true);
            }
        },

        check: function (condition, alertElement, alertMessage, focusedElement) {
            if (!condition) {
                var alert = this.alertTemplate({message: alertMessage});
                $(alertElement).empty().append(alert);

                if (focusedElement) {
                    $(focusedElement).focus();
                }
            }

            return condition;
        }
    });

    return submitView;
});
