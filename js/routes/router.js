define([
    'jquery',
    'backbone'
], function ($, Backbone) {
    'use strict';

    var router = Backbone.Router.extend({

        routes: {
            '': 'showHome',
            'home': 'showHome',
            'get-started': 'getStarted'
        },

        initialize: function () {
            Backbone.history.start();
        }
    });

    return router;
});