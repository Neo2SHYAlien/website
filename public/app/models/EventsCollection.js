define([
  'underscore',
  'backbone',
  'models/EventModel'
], function(_, Backbone, EventModel) {

    var EventsCollection = Backbone.Collection.extend({
        model: EventModel,

        initialize : function(models, options) {},

        // url : 'api/events.json',

    });

  return EventsCollection;

});