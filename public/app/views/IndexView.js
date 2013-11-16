define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/indexTemplate.html'
], function($, _, Backbone, indexTemplate){


    var IndexView = Backbone.View.extend({

        el: '#page-placeholder',
        template: null,
        events: {},

        initialize: function(options) {
            var view = this;
            view.render();
        },

        render: function() {
            var view = this;

            console.log('render index');

            var compiledTemplate = _.template(indexTemplate).call(this);
            view.$el.html(compiledTemplate);
        }

    });

    return IndexView;
});