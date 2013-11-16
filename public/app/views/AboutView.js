define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/aboutTemplate.html'
], function($, _, Backbone, aboutTemplate){
    "use strict";

    var AboutView = Backbone.View.extend({

        el: '#page-placeholder',
        template: null,
        events: {},

        initialize: function(options) {
            var view = this;
            view.render();
        },

        render: function() {
            var view = this;

            var compiledTemplate = _.template(aboutTemplate).call(this);

            view.$el.html(compiledTemplate);
        }

    });

    return AboutView;
});