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
                announcements: 'Обяви',
                sponsors: 'Спонсори',
                contacts: 'Контакти',
                logo: 'Hackafe Plovdiv'

            },

            homePage: {
                title: '<span>Hackafe</span> PLOV<span>&lt;DIV&gt;</span>',
                subtitle: '<span class="top">co-workers &amp;</span> <span class="bottom">hacker space</span>',
                aboutTitle: '<span class="white">Какво е </span><span class="black">hackafe</span>',
                Hackafe: '<span class="highlight">Hackafe Plovdiv</span>',

                WhoWeAre: '<p>Ние сме млади, предприемчиви, образовани и инициативни. Ние създаваме новите технологии и бъдещето. Ние променяме света.</p>',
                HackafePlace: '<p>Hackafe Plovdiv е <a href="#!/contacts">мястото</a>, на което обменяме и споделяме идеи, получаваме нови знания, правим нови контакти.</p>',
                organize: '<p>Организираме курсове, срещи, лекции и конференции в Пловдив:</p>',

                topics: 'Актуални теми от уеб технологиите, дизайна и програмирането.',
                host: 'Домакин на годишното <a href="http://plovdivconf.com" rel="external">PlovdivConf</a> издание.',
                conference: 'Съорганизатор на конференцията <a href="http://plovdev.com" rel="external">PlovDev</a>.',

                videoPresentacion: '<p>Видеопрезентации от наши членове:</p>',
                videoPrLinks1: '<a href="https://www.youtube.com/watch?v=HVN5gKdjo0o" rel="external">Представяне на Hackafe, Георги Ангелов</a>',
                videoPrLinks2: '<a href="https://www.youtube.com/watch?v=LqeLpRcZZqQ" rel="external">Хакерските пространства в България, OpenFest 2013, Валентин Алексиев</a>',
                videoPrLinks3: '<a href="https://www.youtube.com/watch?v=WmLFKdpVGYg" rel="external">Целите на Хакафе, PlovdivConf, Станислав Куманов</a>',
                aboutUsPic:'<img src="images/about-us-photo.png" alt="About hackafe"/>',
                facebookGroup: '<a href="https://www.facebook.com/HackafePlovdiv" rel="external" title="Facebook">',
                facebookButton: '<img src="images/facebook.jpg" alt="Facebook"/> </a> Следете ни във <br/>Фейсбук &gt; &gt; &gt;</p>'
            },

            contacts: {
                title: 'Контакти',
                map: 'Карта',
                street: 'G Street View',
                contacts: 'Контакти',
                org: 'Сдружение с нестопанска цел "Хакафе"',
                loc: 'ул. 11-ти Август №1, 4000 Пловдив, България',
                chief: 'Вожд',
                events: 'Събития',
                finance: 'Финанси',
                manager: 'Офис мениджър',
                common: 'Общ',
                announcement: 'Известия',
                system: 'Онлайн система'

            },

            members:{

                membership: '<span class="block">Как да стана член<span>?</span>',
                about:'<span class="highlight"><a href="#!/contacts">Hackafe</a></span> е отворено общество и всеки може да стане негов член.',
                contacts: '<a href="#!/contacts">Свържете</a> се с нас или елате на <a href="#!/contacts">място.</a>',
                type:"В Hackafe имaме установени 2 типа членство.",
                reg:"Възможност за 24/7 достъп до помещенията на hackafe в самия център на Пловдив.",
                reg1:"Отстъпка за всички платени събития, които се провеждат в рамките на #hackafe.",
                reg2:"Достъп до всички ресурси на лаба.",
                reg3:"Месечен членски внос 10 лв.",
                pro:"Всичко от Reg + гарантирано място / бюро в лаба, на което може да се остави стационарен компютър.",
                pro1:"Достъп до Coworking помещение, което може да се ползва като офис.",
                pro2:"Месечен членски внос 75 лв.",
                members: "Всички членове имат равни права в независимо от нивото на членство.",
                payment:"Как да платим?",
                bankaccount:"С банков превод до сметката на &quot;Хакафе&quot; в ПроКредит Банк:",
                IBAN: "BG36PRCB9230104564"

            },


            events:{

                eventscourses: "Събития и Курсове",
                events: "Събития",
                courses: "Курсове",
                upcoming: "Предстоящи",
                date: "Дата",
                fblink: "Линк към събитието",
                from: "От",
                to: "До",
                nextPage: 'Следваща Страница',
                prevPage: 'Предишна Страница'
            },

            sponsors: {
                title: "Списък на нашите спонсори",
                how_to_title: "Как да станете спонсор и с какво да помогнете",
                how_to_become: "Свържете се с Вожда на Hackafe от страницата с контакти. Можете да дарите нещо от което да имаме полза (има списък на края на страницата) или нещо от което Вие смятате, че ще имаме полза.<br>Примерно: можете да издадете промо кодове за намаление на дадени услуги за членовете на Hackafe.",
                list_of_stuff: '<ul><li>Интернет: оптичен, за да можем да прави live streaming на събития, лекции и workshop-и</li><li>Професионална камера за заснемане: - Примерно CANON LEGRIA HF M52 или CANON LEGRIA HF G10</li><li>Live broadcast устройство - <a href="http://new.livestream.com/broadcaster">livestream broadcaster</a> и лиценз за акаунт към него</li><li>3d printer за изработка на детайли към различни проекти или материали за конструиране на собствен 3d printer</li><li>Шкафове, рафтове, мека мебел и подобни (чакаме дарение, в прогрес)</li><li>Спонсори за работилници изискващи закупуване на определн брой хардуерни материали.</li><li>Телевизор (по-голям от 32 инча) за презентации, реклами и streaming</li><li>Акаунт в <a href="http://tutsplus.com/">http://tutsplus.com/</a> за членовете на Hackafe</li><li>Барбарони за релакс/работен кът</li></ul>'
            },

            announcements:{

                abouthackafe: "За Hackafe",
                announcement: "Обяви",
                free: "Безплатни",
                paid: "Платени",
                description: "Описание",
                contact: "Контакти"
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
                announcements: 'Announcements',
                sponsors: 'Sponsors',
                contacts: 'Contacts',
                logo: 'Hackafe Plovdiv'
            },

            homePage: {
                title: '<span>Hackafe</span> PLOV<span>&lt;DIV&gt;</span>',
                subtitle: '<span class="top">co-workers &amp;</span> <span class="bottom">hacker space</span>',
                aboutTitle: '<span class="white">What is</span><span class="black">hackafe</span>',
                Hackafe: '<span class="highlight">Hackafe Plovdiv</span>',
                WhoWeAre: 'We are young, nterprising, educated and proactive. We create new technology and the future. We change the world.',
                HackafePlace: 'Hackafe Plovdiv is <a href="#!/contacts"> place </a>, where we exchange and share ideas, get new skills, make new contacts.',
                organize: 'We organize courses, meetings, lectures and conferences in Plovdiv:',

                topics: 'Current topics of web technology, design and programming.',
                host: 'Host the annual <a href="http://plovdivconf.com" rel="external"> PlovdivConf </a> edition.',
                conference: 'Co-organizer of the conference <li> <a href="http://plovdev.com" rel="external"> PlovDev </a>.',

                videoPresentacion: '<p>Video presentations from our members:</p>',
                videoPrLinks1:'<a href="https://www.youtube.com/watch?v=LqeLpRcZZqQ" rel="external"> Hacker spaces in Bulgaria, OpenFest 2013, Valentin Alexiev </a>',
                videoPrLinks2:'<a href="https://www.youtube.com/watch?v=LqeLpRcZZqQ" rel="external"> Hacker spaces in Bulgaria, OpenFest 2013, Valentin Alexiev </a>',
                videoPrLinks3:'<a href="https://www.youtube.com/watch?v=WmLFKdpVGYg" rel="external"> objectives of Hakafe, PlovdivConf, Stanislav Kumanov </a>',

                facebookGroup:'<img src="images/about-us-photo.png" alt="About hackafe"/>',
                facebookButton: '<a href="https://www.facebook.com/HackafePlovdiv" rel="external" title="Facebook">',
                facebookGroup2: '<img src="images/facebook.jpg" alt="Facebook"/></a> Follow us on<br/>Фейсбук &gt; &gt; &gt;</p>'
            },

            contacts: {
                title: 'Contacts',
                map: 'Map',
                street: 'G Street View',
                contacts: 'Contacts',
                org: 'Non-profit organization "Hackafe"',
                loc: ' 11ti August №1, 4000 Plovdiv, Bulgaria',
                chief: 'Chief',
                events: 'Events',
                finance: 'Finance',
                manager: 'Office manager',
                common: 'Common',
                announcement: 'Announcement',
                system: 'Online system'

            },

           events:{

                eventscourses: "Events and Courses",
                events: "Events",
                courses: "Courses",
                upcoming: "Upcoming Events",
                date: "Date",
                fblink: "Link to this event",
                from: "From",
                to: "To",
                nextPage: 'Next Page',
                prevPage: 'Previous Page'
            },

            sponsors: {
                title: "List of our sponsors",
                how_to_title: "How to become sponsor",
                how_to_become: "Contact the leader of Hackafe from the contacts page. You can gift us something from the list below or give us something you think will be usefull to our hackerspace.<br>For example: you can give us promocodes for services usefull to Hackafe's members.",
                list_of_stuff: '<ul><li>Internet: optic internet connection, so we can live streaming events, lectures, courses and workshops</li><li>Professional camera for recording: - CANON LEGRIA HF M52 или CANON LEGRIA HF G10</li><li>Live broadcast device like - <a href="http://new.livestream.com/broadcaster">livestream broadcaster</a> and a licens to use it</li><li>3d printer for roducing materials for projects or the materials to build our own 3d printer</li><li>Cabinets, shelves, sofas, etc. (in progress)</li><li>Sponsor workshops that need buying parts and hardware devices.</li><li>TV (larger than 32 inch) for presentations, ads and streaming</li><li>Account for <a href="http://tutsplus.com/">http://tutsplus.com/</a> for the members of Hackafe</li><li>Beanbag for relax/work space</li></ul>'
            },

            members:{

                membership:"How to become a member?",
                about:'<span class="highlight"><a href="#!/contacts">Hackafe</a></span> is an open group and everyone can become a part of it.',
                contacts:'<a>Contact</a> us or come visit us <a href="#!/contacts">at.</a>',
                type:"In Hackafe, there are 2 types of membership.",
                reg:"You have full time access to the facility of Hackafe.",
                reg1:"You get a discount for every paid event that are held by #hackafe.",
                reg2:"You get access to all the resources in the lab.",
                reg3:"Montlhy payment 10lv.",
                pro:"Everything from Reg + guaranteed room / desk in the lab where you can place a stationary computer.",
                pro1:"Access to Coworking facility that can be used as an office.",
                pro2:" Monthly payment 75lv.",
                members: "Every member has equal rights regardless of membership type.",
                payment:"How to pay?",
                bankaccount:"With a bank transfer to the account of Hackafe in ProCredit Bank.",
                IBAN: "BG36PRCB92301045641219"
            },


            announcements:{

                abouthackafe: "Аbout Hackafe",
                announcement: "Announcements",
                free: "Free",
                paid: "Paid",
                description: "Description",
                contact: "Contacts"
            }

        };
    }
);