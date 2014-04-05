define([
  'underscore',
  'backbone',
  'models/EventModel'
], function(_, Backbone, EventModel) {

    var EventsCollection = Backbone.Collection.extend({
        model: EventModel,
        url: 'api/events.php?url_string=%2Fevents%3Ffields=description,end_time,location,name,owner,picture,start_time,timezone,id,venue%26limit=10',

        initialize : function(models, options) {
            var collection = this;

            $.get(collection.url, function(rawData) {

                rawData = JSON.parse(rawData);
                console.log(rawData);
                collection.parseRawData(rawData);
            });

        },

        loadNewModels : function(urlParam) {
            var collection = this;

            collection.reset();

            $.get(collection.url + '%26' + urlParam, function(rawData) {

                console.log(['new rawData', rawData])

                rawData = JSON.parse(rawData);

                collection.parseRawData(rawData);
            });
        },

        parseRawData: function(rawData) {
            var collection = this;

            _.each(rawData.data, function(eventModel) {

                if(eventModel.start_time && eventModel.end_time) {
                    var start = eventModel.start_time.split('T');
                    start = parseInt(start[0].split('-').join(''));

                    var end = eventModel.end_time.split('T');
                    end = parseInt(end[0].split('-').join(''));

                    if(end - start > 2) {
                        eventModel.isCourse = true;
                    }

                }

                collection.push(eventModel);
            });

            var nextEventsUrlParam = null,
                previousEventsUrlParam = null;

            if(rawData.paging.next) {
                nextEventsUrlParam = rawData.paging.cursors.after;
            }

            if(rawData.paging.previous) {
                previousEventsUrlParam = rawData.paging.cursors.before
            }

            window.eventDispacher.trigger('events:update:paging', {
                nextEventsUrlParam: nextEventsUrlParam,
                previousEventsUrlParam: previousEventsUrlParam
            });


            window.eventDispacher.trigger('events:render');
        }

    });

  return EventsCollection;

});