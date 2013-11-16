define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/contactsTemplate.html'
], function($, _, Backbone, contactsTemplate){
    "use strict";

    var ContactsView = Backbone.View.extend({

        el: '#page-placeholder',
        template: null,
        events: {},

        initialize: function(options) {
            var view = this;
            view.render();
        },

        render: function() {
            var view = this;

            var compiledTemplate = _.template(contactsTemplate).call(this);

            view.$el.html(compiledTemplate);
        }

    });

    return ContactsView;
});