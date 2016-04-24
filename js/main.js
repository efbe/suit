/**
 * Require js module list
 */

'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
    },
    paths: {
        jquery:     '../node_modules/jquery/dist/jquery.min',
        backbone:   '../node_modules/backbone/backbone-min',
        underscore: '../node_modules/underscore/underscore-min'
    }
});


/**
 * Include the app
 */

require([
    'app/app'
], function (App) {
    var app = new App({
        el: $('body')
    });
});
