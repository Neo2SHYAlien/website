define(['I18n'],
    function(I18n) {
        "use strict";

        I18n.translations = I18n.translations || {};

        I18n.translations['BG'] = {
            header: {

            },
            footer: {
                copyright: ''
            },
            navigation: {
                home: 'Начало',
                about: 'За нас',
                events: 'Събития',
                contacts: 'Контакти'
            },

            homePage: {
                title: '<span class="white">Какво е</span><span class="black">hackafe</span>'
            }
        };

        I18n.translations['EN'] = {
            header: {

            },
            footer: {
                copyright: ''
            },
            navigation: {
                home: 'Home',
                about: 'About',
                events: 'Events',
                contacts: 'Contacts'
            },

            homePage: {
                title: '<span class="white">What is</span><span class="black">hackafe</span>'
            }
        };

    }
);