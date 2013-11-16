define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/eventsTemplate.html'
], function($, _, Backbone, eventsTemplate){


    var EventsView = Backbone.View.extend({

        el: '#page-placeholder',
        template: null,
        events: {},

        initialize: function(options) {
            var view = this;



            view.render();
        },

        render: function(options) {
            var view = this;

            console.log(['render Events', options]);

            var compiledTemplate = _.template(eventsTemplate).call(this);
            view.$el.html(compiledTemplate);
        }

    });

    return EventsView;
});