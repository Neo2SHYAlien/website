define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/projectsTemplate.html'
], function($, _, Backbone, projectsTemplate){


    var ProjectsView = Backbone.View.extend({

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

            var compiledTemplate = _.template(projectsTemplate).call(this);
            view.$el.html(compiledTemplate);
        }

    });

    return ProjectsView;
});