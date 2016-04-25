define([
    'jquery',
    'underscore',
    'backbone',
    '../model/page',
    '../routes/router'
], function ($, _, Backbone, PageModel, Router) {
    'use strict';

    var PageView = Backbone.View.extend({

        el: 'body',

        events: {
            'click .js-link': 'onMenuItemClick'
        },

        /**
         * Menu view init
         * @method initialize
         */
        initialize: function() {
            this.pageModel = new PageModel();
            this.router = new Router();

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
            this.router.navigate(page, true);
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
         * Fetches the selected pageId and passes it to showPage()
         * @method onMenuItemClick
         * @param {Object} e
         */
        onMenuItemClick: function(e) {
            e.preventDefault();

            var target = $(e.target),
                url = target.attr('href'),
                title;

            title = this.pageModel.getTitle(target);

            this.updatePageTitle(title);
            this.showPage('#' + url); // menu item data should match with ".js-page" id!
            // TODO: updateMenu
            this.setUrl(url);
        }
    });

    return PageView;
});