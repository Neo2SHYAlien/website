// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'I18n',
  'translations',
  'views/HeaderView',
  'views/FooterView',
  'views/IndexView',
  'views/EventsView',
  'views/ProjectsView',
  'views/AboutView',
  'views/SponsorsView',
  'views/ContactsView',
  'models/EventsCollection',
  'models/ProjectsCollection',
  'models/SponsorsCollection',
  ],
  function($, _, Backbone, I18n, translations, HeaderView, FooterView, IndexView, EventsView, ProjectView, AboutView, SponsorsView, ContactsView, EventsCollection, ProjectsCollection, SponsorsCollection) {
    // "use strict";

    var AppRouter = Backbone.Router.extend({
        root: "/#!/",
        routes: {
            '': 'index',
            '!/': 'index',
            '!/events/:eventId': 'events',
            '!/events': 'events',
            '!/projects/:projectId': 'projects',
            '!/projects': 'projects',
            '!/sponsors': 'sponsors',
            '!/about': 'about',
            '!/contacts': 'contacts'
        },

        views: {},
        models: {},
        collections: {},

        /**
         * Initialize application
         * returns router instance
         **/
        initialize: function() {

            var router = this;

            //TO DO: create Who is in the lab widget

            //used for debug
            router.on('all', function (eventName) {
                console.log(eventName);
            });

            //static views
            router.views.footerView = new FooterView();

            return router;
        },

        index: function() {
            var router = this;

            console.log('index success');

            //updateHeader
            if(router.views.headerView) {
                router.views.headerView.render();
            }else {
                router.views.headerView = new HeaderView();
            }

            //updatePage content
            if(router.views.indexView) {
                router.views.indexView.render();
            }else {
                router.views.indexView = new IndexView();
            }

            //bind language update
            window.eventDispacher.on('language:update', router.views.indexView.render, router.views.indexView);


            //Turn off all index events
            router.on('all', function (eventName) {

                if(eventName && eventName.indexOf('route:') === 0 && eventName !== 'route:index') {
                    this.off(null, arguments.callee);

                    window.eventDispacher.off('language:update', router.views.indexView.render);
                    // app.views.indexView && app.views.indexView.destroy() && (delete app.views.indexView);
                }

            });

            return this;
        },

        about: function() {
            var router = this;

            //updateHeader
            if(router.views.headerView) {
                router.views.headerView.render();
            }else {
                router.views.headerView = new HeaderView();
            }

            //updatePage content
            if(router.views.aboutView) {
                router.views.aboutView.render();
            }else {

                router.views.aboutView = new AboutView();
            }

            //bind language update
            window.eventDispacher.on('language:update', router.views.aboutView.render, router.views.aboutView);

            //Turn off all about events
            router.on('all', function (eventName) {

                if(eventName && eventName.indexOf('route:') === 0 && eventName !== 'route:about') {
                    this.off(null, arguments.callee);

                    window.eventDispacher.off('language:update', router.views.aboutView.render);
                }

            });
        },

        events: function(eventId) {
            var router = this;


            //updateHeader
            if(router.views.headerView) {
                router.views.headerView.render();
            }else {
                router.views.headerView = new HeaderView();
            }

            //updatePage content
            if(router.views.eventView) {

                router.views.eventView.render({
                    eventId: eventId
                });

            }else {

                router.views.eventView = new EventsView({
                    eventsCollection: null,
                    eventId: eventId || null
                });
            }


            //bind language update
            //To DO: refactor language update mechanism
            window.eventDispacher.off('language:update', router.views.eventView.render);
            window.eventDispacher.on('language:update', router.views.eventView.render, router.views.eventView);

            //Turn off all event events
            router.on('all', function (eventName) {

                if(eventName && eventName.indexOf('route:') === 0 && eventName !== 'route:catalog') {
                    this.off(null, arguments.callee);

                    window.eventDispacher.off('language:update', router.views.eventView.render);
                }

            });

        },

        contacts: function() {
            var router = this;

            //updateHeader
            if(router.views.headerView) {
                router.views.headerView.render();
            }else {
                router.views.headerView = new HeaderView();
            }

            //updatePage content
            if(router.views.contactsView) {
                router.views.contactsView.render();
            }else {

                router.views.contactsView = new ContactsView();
            }

            //bind language update
            window.eventDispacher.on('language:update', router.views.contactsView.render, router.views.contactsView);

            //Turn off all contacts events
            router.on('all', function (eventName) {

                if(eventName && eventName.indexOf('route:') === 0 && eventName !== 'route:contacts') {
                    this.off(null, arguments.callee);

                    window.eventDispacher.off('language:update', router.views.contactsView.render);
                }

            });
        }

    });

    var initialize = function() {

        I18n.defaultLocale = "BG";
        I18n.locale = window.localStorage.locale || "BG";

        var app_router = new AppRouter();

        Backbone.history.start({pushState: false, root: app_router.root });

    };

    return {
        initialize: initialize
    };

});
