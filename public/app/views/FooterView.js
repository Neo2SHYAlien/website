define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/footerTemplate.html'
], function($, _, Backbone, footerTemplate){
    "use strict";

    var FooterView = Backbone.View.extend({

        el: '#footer-placeholder',
        template: null,
        events: {},

        initialize: function(options) {
            var view = this;
            view.render();

            window.eventDispacher.on('language:update', view.render, view);
        },

        render: function() {
            var view = this;

            var compiledTemplate = _.template(footerTemplate).call(this);

            view.$el.html(compiledTemplate);
        }

    });

    return FooterView;
});