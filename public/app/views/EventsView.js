define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/eventsTemplate.html'
], function($, _, Backbone, eventsTemplate){


    var EventsView = Backbone.View.extend({

        el: '#page-placeholder',
        template: null,
        events: {
            'click .show-content': "switchTabs"
        },

        initialize: function(options) {
            var view = this;



            view.render();
        },

        render: function(options) {
            var view = this;

            console.log(['render Events', options]);

            var compiledTemplate = _.template(eventsTemplate).call(this);
            view.$el.html(compiledTemplate);
        },

        switchTabs: function(evnt) {
            
            var target = $(evnt.target);
            var dataTarget = target.data('target');

            this.$el.find('.active').removeClass('active');
            this.$el.find('.visible').removeClass('visible');
            target.addClass('active');

            $('#' + dataTarget).addClass('visible');
        }

    });

    return EventsView;
});