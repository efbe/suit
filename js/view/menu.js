/*global define*/

define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    'use strict';

    var MenuView = Backbone.View.extend({

        el: 'body',

        events: {
            //'click #new': 'onNewClick'
        },

        /**
         * Menu view init
         * @method initialize
         */
        initialize: function() {
            this.test();
        },

        test: function () {
            console.log('view init');
        }
    });

    return MenuView;
});