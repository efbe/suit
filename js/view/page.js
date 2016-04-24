define([
    'jquery',
    'underscore',
    'backbone',
    '../routes/router'
], function ($, _, Backbone, router) {
    'use strict';

    var PageView = Backbone.View.extend({

        el: 'body',

        events: {
            'click .js-menu-item': 'onMenuItemClick'
        },

        /**
         * Menu view init
         * @method initialize
         */
        initialize: function() {
            this.showPage('#home'); // init test
        },

        /**
         * Hide all pages, show the active one
         * method showPage
         * @param {String} page
         */
        showPage: function(page) {
            $('.js-page').addClass('hidden');
            $(page).removeClass('hidden');
        },

        /**
         * Sets the route according to the active pageId
         * @method setUrl
         * @param {String} page
         */
        setUrl: function(page) {
            router.navigate(page, true);
        },

        /**
         * Simply updates the page title
         * @method updatePageTitle
         * @param {String} title
         */
        updatePageTitle: function(title) {
            $('.js-page-title').text(title);
        },

        /**
         * If we wanna set a custom title we can store it in the "data-title" attr
         * Otherwise we fallback to the text
         * @method getTitle
         * @param {Object} target
         * @returns {String} title
         */
        getTitle: function (target) {
            var title;

            if (target.is('[data-title]')) {
                title = target.attr('data-title')
            } else {
                title = target.text();
            }

            return title;
        },

        /**
         * Fetches the selected pageId and passes it to showPage()
         * @method onMenuItemClick
         * @param {Object} e
         */
        onMenuItemClick: function(e) {
            e.preventDefault();

            var target = $(e.target),
                url = target.attr('rel'),
                title;

            title = this.getTitle(target);

            this.updatePageTitle(title);
            this.showPage('#' + url); // menu item data should match with ".js-page" id!
            // TODO: updateMenu
            this.setUrl(url);
        }
    });

    return PageView;
});