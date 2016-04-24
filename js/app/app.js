define([
    'backbone',
    //'routes/router',
    'view/menu'
], function (
    Backbone,
    //Router,
    MenuView
) {
    var App = Backbone.View.extend({
        initialize: function () {
            var menuView = new MenuView();

            // Router
            // var router = new Router();
        }
    });

    return App;
});