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
  'views/MembersView',
  'views/SponsorsView',
  'views/ContactsView',
  'views/AnnouncementsView',
  'models/EventsCollection',
  'models/ProjectsCollection',
  'models/SponsorsCollection',
  'models/FutureEventsCollection',
  ],
  function($, _, Backbone, I18n, translations, HeaderView, FooterView, IndexView, EventsView, ProjectView,MembersView, SponsorsView, ContactsView, AnnouncementsView, EventsCollection, ProjectsCollection, SponsorsCollection, FutureEventsCollection) {
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
            '!/announcements': 'announcements',
            '!/sponsors': 'sponsors',
            '!/members': 'members',
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

       members: function() {
            var router = this;

            //updateHeader
            if(router.views.headerView) {
                router.views.headerView.render();
            }else {
                router.views.headerView = new HeaderView();
            }

            //updatePage content
            if(router.views.membersView) {
                router.views.membersView.render();
            }else {

                router.views.membersView = new MembersView();
            }

            //bind language update
            window.eventDispacher.on('language:update', router.views.membersView.render, router.views.membersView);

            //Turn off all about events
            router.on('all', function (eventName) {

                if(eventName && eventName.indexOf('route:') === 0 && eventName !== 'route:members') {
                    this.off(null, arguments.callee);

                    window.eventDispacher.off('language:update', router.views.membersView.render);
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

                if(eventName && eventName.indexOf('route:') === 0 && eventName !== 'route:events') {
                    this.off(null, arguments.callee);

                    window.eventDispacher.off('language:update', router.views.eventView.render);
                }

            });

        },

        announcements: function() {
            var router = this;


            //updateHeader
            if(router.views.headerView) {
                router.views.headerView.render();
            }else {
                router.views.headerView = new HeaderView();
            }

            //updatePage content
            if(router.views.announcementsView) {

                router.views.announcementsView.render();

            }else {

                router.views.announcementsView = new AnnouncementsView();
            }


            //bind language update
            //To DO: refactor language update mechanism
            window.eventDispacher.off('language:update', router.views.announcementsView.render);
            window.eventDispacher.on('language:update', router.views.announcementsView.render, router.views.announcementsView);

            //Turn off all event events
            router.on('all', function (eventName) {

                if(eventName && eventName.indexOf('route:') === 0 && eventName !== 'route:announcements') {
                    this.off(null, arguments.callee);

                    window.eventDispacher.off('language:update', router.views.announcementsView.render);
                }

            });

        },

        sponsors: function() {
            var router = this;


            //updateHeader
            if(router.views.headerView) {
                router.views.headerView.render();
            }else {
                router.views.headerView = new HeaderView();
            }

            //updatePage content
            if(router.views.sponsorsView) {

                router.views.sponsorsView.render();

            }else {

                router.views.sponsorsView = new SponsorsView();
            }


            //bind language update
            //To DO: refactor language update mechanism
            window.eventDispacher.off('language:update', router.views.sponsorsView.render);
            window.eventDispacher.on('language:update', router.views.sponsorsView.render, router.views.sponsorsView);

            //Turn off all event events
            router.on('all', function (eventName) {

                if(eventName && eventName.indexOf('route:') === 0 && eventName !== 'route:sponsors') {
                    this.off(null, arguments.callee);

                    window.eventDispacher.off('language:update', router.views.sponsorsView.render);
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