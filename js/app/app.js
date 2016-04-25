define([
    'backbone',
    'routes/router',
    'model/page',
    'view/page'
], function (
    Backbone,
    Router,
    PageModel,
    PageView
) {
    var App = Backbone.View.extend({
        initialize: function () {
            var pageView = new PageView();
        }
    });

    return App;
});