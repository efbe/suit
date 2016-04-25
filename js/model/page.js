define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var PageModel = Backbone.Model.extend({
        initialize: function() {},

        /**
         * If we wanna set a custom title we can store it in the "data-title" attr
         * Otherwise we fallback to the text
         * @method getTitle
         * @param {Object} elem
         * @returns {String} title
         */
        getTitle: function (elem) {
            var title;

            if (elem.is('[data-title]')) {
                title = elem.attr('data-title')
            } else {
                title = elem.text();
            }

            return title;
        }
    });

    return PageModel;
});