define([
  'jquery',
  'underscore',
  'backbone',
  'models/EventsCollection',
  'models/FutureEventsCollection',
  'text!templates/eventsTemplate.html'
], function($, _, Backbone, EventsCollection, FutureEventsCollection, eventsTemplate){


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

            view.futureEventsCollection = new FutureEventsCollection();
            view.eventsCollection = new EventsCollection();

            //Dev note: For some reason $.when with the 2 deferred obejct dosn't works correctly
            view.eventsCollection.deferred.done(function() {
                view.futureEventsCollection.deferred.done(function() {
                    view.render();
                });
            });

            window.eventDispacher.on('events:render', function() {
                console.log('events:render - render events');
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

            console.log(['render: render Events', view.eventsCollection.deferred.state()]);

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
                url = 'pageNumber=' + view.nextEventsUrlParam;
                
                view.nextEventsUrlParam++;
                view.previousEventsUrlParam++;

            view.eventsCollection.loadNewModels(url);
        },

        loadPrevPage: function(evnt) {
            var view = this,
                url = 'pageNumber=' + view.previousEventsUrlParam;
                
                view.nextEventsUrlParam--;
                view.previousEventsUrlParam--;

            view.eventsCollection.loadNewModels(url);
        }

    });

    return EventsView;
});