define([
    'backbone',
    'routes/router',
    'view/page'
], function (
    Backbone,
    Router,
    PageView
) {
    var App = Backbone.View.extend({
        initialize: function () {
            var router   = new Router(),
                pageView = new PageView();
        }
    });

    return App;
});