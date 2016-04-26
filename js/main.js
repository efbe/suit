'use strict';

/**
 * Collect required modules
 */
require.config({
    paths: {
        jquery:     '../node_modules/jquery/dist/jquery.min',
        underscore: '../node_modules/underscore/underscore-min',
        backbone:   '../node_modules/backbone/backbone-min'
    }
});

require([
    'backbone',
    'view/page',
    'routes/router'
], function (Backbone, PageView) {
    // Initialize the application view
    new PageView();

    // Start router history
    Backbone.history.start();
});
