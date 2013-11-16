define([
  'underscore',
  'backbone'
], function(_, Backbone) {

    var EventModel = Backbone.Model.extend({

            //instance methods
            defaults: {
                id: null,
                name: null
            },

            idAttribute: 'id',

            initialize: function(options) {

            }

        },{
            //static methods
        }
    );

  return EventModel;

});