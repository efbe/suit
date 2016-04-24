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
            $('.page').addClass('hidden');
            $(page).removeClass('hidden');
        },

        setUrl: function(page) {
            router.navigate(page, true);
        },

        /**
         * Fetches the selected pageId and passes it to showPage()
         * @method onMenuItemClick
         * @param {Object} e
         */
        onMenuItemClick: function(e) {
            e.preventDefault();

            var menuItem = $(e.target).attr('data-menu-name');

            // menu item data should match with ".page" id!
            this.showPage('#' + menuItem);
            this.setUrl(menuItem)
        }
    });

    return PageView;
});