/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'routes/router',
    '../model/page'
], function ($, _, Backbone, AppRouter, PageModel) {
    'use strict';

    var PageView = Backbone.View.extend({

        el: 'body',

        events: {
            'click .js-link': 'onMenuItemClick'
        },

        initialize: function () {
            this.router = new AppRouter();
            this.pageModel = new PageModel();
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

            this.router.updatePageTitle(title);
            this.router.navigate(url, true); // menu item data should match with ".js-page" id!
        }
    });

    return PageView;
});