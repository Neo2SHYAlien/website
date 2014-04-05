define([
  'jquery',
  'underscore',
  'backbone',
  'models/EventsCollection',
  'text!templates/eventsTemplate.html'
], function($, _, Backbone, EventsCollection, eventsTemplate){


    var EventsView = Backbone.View.extend({

        el: '#page-placeholder',
        template: null,
        events: {
            'click .show-content': "switchTabs",
            'click .load-next-page': "loadNextPage",
            'click .load-prev-page': "loadPrevPage"
        },

        selectedSection: 0,

        initialize: function(options) {
            var view = this;

            view.eventsCollection = new EventsCollection();

            window.eventDispacher.on('events:render', function() {
                console.log('render events');
                view.render();
            });

            window.eventDispacher.on('events:update:paging', function(evnt) {
                console.info(['updating paging params', evnt]);
                view.nextEventsUrlParam = evnt.nextEventsUrlParam;
                view.previousEventsUrlParam = evnt.previousEventsUrlParam;
            });
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
            var index = target.index();

            this.selectedSection = index;

            this.$el.find('.active').removeClass('active');
            this.$el.find('.visible').removeClass('visible');
            target.addClass('active');

            $('#' + dataTarget).addClass('visible');
        },

        loadNextPage: function(evnt) {
            var view = this,
                url = 'after=' + view.nextEventsUrlParam;

            view.eventsCollection.loadNewModels(url);
        },

        loadPrevPage: function(evnt) {
            var view = this,
                url = 'before=' + view.previousEventsUrlParam;

            view.eventsCollection.loadNewModels(url);
        }

    });

    return EventsView;
});