define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'showHome',
            'home': 'showHome',
            'get-started': 'getStarted'
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
         * Simply updates the page title
         * @method updatePageTitle
         * @param {String} title
         */
        updatePageTitle: function(title) {
            $('.js-page-title').text(title);
        },

        showHome: function () {
            this.showPage('#home');
            this.updatePageTitle('Introduction');
        },

        getStarted: function () {
            this.showPage('#get-started');
            this.updatePageTitle('Get started');
        }
    });

    return AppRouter;
});