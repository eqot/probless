/*global define */
define([
    'jquery',
    'backbone',
    'underscore',
    'model/problem',
    'text!template/submitView.html',
    'text!template/alert.html'
], function ($, Backbone, _, Problem, SubmitViewTemplate, AlertTemplate) {
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
            var tags = [];
            var nickname = $('#nickname-visible')[0].selectedIndex === 1;

            var problem = new Problem.Problem();
            problem.on('invalid', function (model, error) {
                // console.log(error);

                var alert = _.template(AlertTemplate)({message: error});
                $('#submit-alert').empty().append(alert);
            });

            // problem.set({
            problem.save({
                title: title,
                description: description,
                tags: tags,
                nickname: nickname
            }, {success: this.onSaved, error: this.onError});
            // });
            // }, {validate: true});

            // console.log(problem);

            // problem.save(null, {sucecss: this.onSaved, error: this.onError});

/*

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
*/

            // $.post('problem', data, this.onSubmit);
        },

        onSaved: function (model, response, options) {
            console.log(response);
            model.set('id', response);
            console.log(model);
            console.log(model.url());

            // model.fetch();
        },

        onError: function () {
            console.log('Error');
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
