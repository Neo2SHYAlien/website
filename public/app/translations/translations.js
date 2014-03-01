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
                member: 'Стани член',
                events: 'Събития',
                contacts: 'Контакти',
                logo: 'Hackafe Plovdiv'
            },

            homePage: {
                title: '<span class="white">Какво е</span><span class="black">hackafe</span>'
            },

            contacts: {
                title: 'Контакти',
                map: 'Карта'
            },
            members:{

                membership: '<span class="block">Как да стана член<span>?</span>',
                about:" е отворено общество и всеки може да стане негов член.",
                contacts: '<a>Свържете</a> се с нас или елате на <a href="#location">място.</a>',
                type:"В Hackafe имaме установени 2 типа членство.",
                reg:"Възможност за 24/7 достъп до помещенията на hackafe в самия център на Пловдив.",
                reg1:"Отстъпка за всички платени събития, които се провеждат в рамките на #hackafe.",
                reg2:"Достъп до всички ресурси на лаба.",
                reg3:"Месечен членски внос 10 лв.",
                pro:"Всичко от REG + гарантирано място / бюро в лаба, на което може да се остави стационарен компютър.",
                pro1:"Достъп до PRO помещение, което може да се ползва като офис.",
                pro2:"Месечен членски внос 75 лв.",
                members: "Всички членове имат равни права в независимо от нивото на членство.",
                payment:"Как да платим?",
                bankaccount:"С банков превод до сметката на &quot;Хакафе&quot; в ПроКредит Банк:",
                IBAN: "BG36PRCB92301045641219"



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
                member: 'Become Member',
                events: 'Events',
                contacts: 'Contacts',
                logo: 'Hackafe Plovdiv'
            },

            homePage: {
                title: '<span class="white">What is</span><span class="black">hackafe</span>'
            },

            contacts: {
                title: 'Contacts',
                map: 'Map'
            },
             members:{
                
                membership: "How to become a member?",
                about:"Hackafe is an open group and everyone can become a part of it.",
                contacts:"Contact with us or come visit us.",
                type:"In Hackafe, there are 2 types of membership.",
                reg:"You have non-stop acces to the facility of Hackafe.",
                reg1:"Discount for every paid event that are held by #hackafe.",
                reg2:"Acces to all the resources in the lab.",
                reg3:"Montly payment 10lv.",
                pro:"Everything from REG + guaranteed room / desk in the lab where you can place a stationary computer.",
                pro1:"Acces to PRO facility that can be used as an office.",
                pro2:" Montly payment 75lv.",
                members: "Every member has equal rights regardless of membership type.",
                payment:"How to pay?",
                bankaccount:"With a bank transfer to the account of Hackafe in ProCredit Bank.",
                IBAN: "BG36PRCB92301045641219"

            }
        };

    }
);