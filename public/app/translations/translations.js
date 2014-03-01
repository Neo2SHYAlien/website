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
            }

            Contacts: {
                title: '<span class="white">Какво е</span><span class="black">hackafe</span>'
                <section id="location">
                  <article>
                    <div id="tabBox">
                      <div class="content">
                        <ul class="nav">
                          <li><a href="#tabOne" class="current" title="Карта">Карта</a></li>
                          <li><a href="#tabTwo" title="G Street View">G Street View</a></li>
                        </ul>
                      </div>
                      <!-- End of content -->
                      <div class="clear"></div>
                      <div id="tabOne">
                        <iframe width="100%" height="605" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.bg/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=ulitsa+%22Grozdov+pazar+2%22,+4000+Plovdiv&amp;sll=42.147496,24.750481&amp;sspn=0.054409,0.132093&amp;ie=UTF8&amp;hq=&amp;hnear=ulitsa+%22Grozdov+pazar+2%22,+4000+Plovdiv&amp;ll=42.145271,24.745339&amp;spn=0.006801,0.016512&amp;t=m&amp;z=14&amp;output=embed"></iframe>
                        <!--<p><a href="https://maps.google.bg/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%E2%80%9E%D0%A2%D0%BE%D0%B4%D0%BE%D1%80+%D0%9A%D0%B0%D0%B1%D0%BB%D0%B5%D1%88%D0%BA%D0%BE%D0%B2%E2%80%9C,+Plovdiv,+Bulgaria&amp;aq=0&amp;oq=%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%E2%80%9E%D0%A2%D0%BE%D0%B4%D0%BE%D1%80+%D0%9A%D0%B0%D0%B1%D0%BB%D0%B5%D1%88%D0%BA%D0%BE%D0%B2%E2%80%9C,+Plovdiv,+Bulgaria&amp;sll=42.14437,24.746087&amp;sspn=0.001704,0.004128&amp;ie=UTF8&amp;hq=&amp;hnear=ulitsa+%22Todor+Kableshkov%22,+Plovdiv&amp;ll=42.145416,24.745333&amp;spn=0.006785,0.016512&amp;t=m&amp;z=14">View Larger Map</a></p>--> 
                      </div>
                      <!-- End of tabOne -->
                      <div id="tabTwo" class="hide" style="position: relative; top: 0px; left: 0px; display: none;">
                        <iframe width="100%" height="605" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.bg/maps?hl=en&amp;t=m&amp;layer=c&amp;cbll=42.144371,24.746086&amp;panoid=CZH76nsZGypQ6SgoisES0w&amp;cbp=12,324.8,,0,1.63&amp;ie=UTF8&amp;ll=42.14438,24.74616&amp;spn=0.0017,0.004128&amp;z=19&amp;source=embed&amp;output=svembed"></iframe>
                        <!--<p><a href="https://maps.google.bg/maps?hl=en&amp;t=m&amp;layer=c&amp;cbll=42.144371,24.746086&amp;panoid=CZH76nsZGypQ6SgoisES0w&amp;cbp=12,324.8,,0,1.63&amp;ie=UTF8&amp;ll=42.14438,24.74616&amp;spn=0.0017,0.004128&amp;z=19&amp;source=embed">View Larger Map</a></p>--> 
                      </div>
                      <!-- End of tabTwo --> 
                    </div>
                  </article>
                </section>
                <section id="contacts">
              <article>
                <div class="content">
                  <header>
                    <h2>контакти</h2>
                    <address>
                      Сдружение с нестопанска цел "Хакафе"<br>
                      пл. "Гроздов Пазар" №2, 4000 Пловдив, България
                    </address>
                    <div class="clear"></div>
                  </header>
                  <ul class="contactMembers">
                    <li>
                      <h3>Е-mail</h3>
                      <span class="mail">Вожд</span> 
                      <a href="mailto:info@hackafe.org" title="info@hackafe.org">info@hackafe.org</a><br>
                      <span class="mail">Събития</span>
                      <a href="mailto:events@hackafe.org" title="events@hackafe.org">events@hackafe.org</a><br>
                      <span class="mail">Финанси</span>
                      <a href="mailto:finance@hackafe.org" title="finance@hackafe.org">finance@hackafe.org</a><br>
                      <span class="mail">Офис мениджър</span>
                      <a href="mailto:office@hackafe.org" title="office@hackafe.org">office@hackafe.org</a><br>           
                    </li>
                    <li>
                      <h3>Нашите мейлинг листи</h3>
                      <span class="mail">Обща</span> 
                      <a href="http://luna.superhosting.bg/mailman/listinfo/general_hackafe.org" rel="external" title="general@hackafe.org">general@hackafe.org</a><br>
                      <span class="mail">Известия</span>
                      <a href="http://luna.superhosting.bg/mailman/listinfo/announce_hackafe.org" rel="external" title="announce@hackafe.org">announce@hackafe.org</a><br>
                      <span class="mail">Онлайн системи</span>
                      <a href="http://luna.superhosting.bg/mailman/listinfo/dev_hackafe.org" rel="external" title="dev@hackafe.org">dev@hackafe.org</a><br>
                    </li>
                  </ul>
                  <!-- End of contactMembers -->
                  <div class="clear"></div>
                </div>
              </article>
            </section>
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
            }

            Contacts: {
                title: '<span class="white">What is</span><span class="black">hackafe</span>'
                <section id="location">
                  <article>
                    <div id="tabBox">
                      <div class="content">
                        <ul class="nav">
                          <li><a href="#tabOne" class="current" title="Карта">Map</a></li>
                          <li><a href="#tabTwo" title="G Street View">G Street View</a></li>
                        </ul>
                      </div>
                      <!-- End of content -->
                      <div class="clear"></div>
                      <div id="tabOne">
                        <iframe width="100%" height="605" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.bg/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=ulitsa+%22Grozdov+pazar+2%22,+4000+Plovdiv&amp;sll=42.147496,24.750481&amp;sspn=0.054409,0.132093&amp;ie=UTF8&amp;hq=&amp;hnear=ulitsa+%22Grozdov+pazar+2%22,+4000+Plovdiv&amp;ll=42.145271,24.745339&amp;spn=0.006801,0.016512&amp;t=m&amp;z=14&amp;output=embed"></iframe>
                        <!--<p><a href="https://maps.google.bg/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%E2%80%9E%D0%A2%D0%BE%D0%B4%D0%BE%D1%80+%D0%9A%D0%B0%D0%B1%D0%BB%D0%B5%D1%88%D0%BA%D0%BE%D0%B2%E2%80%9C,+Plovdiv,+Bulgaria&amp;aq=0&amp;oq=%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%E2%80%9E%D0%A2%D0%BE%D0%B4%D0%BE%D1%80+%D0%9A%D0%B0%D0%B1%D0%BB%D0%B5%D1%88%D0%BA%D0%BE%D0%B2%E2%80%9C,+Plovdiv,+Bulgaria&amp;sll=42.14437,24.746087&amp;sspn=0.001704,0.004128&amp;ie=UTF8&amp;hq=&amp;hnear=ulitsa+%22Todor+Kableshkov%22,+Plovdiv&amp;ll=42.145416,24.745333&amp;spn=0.006785,0.016512&amp;t=m&amp;z=14">View Larger Map</a></p>--> 
                      </div>
                      <!-- End of tabOne -->
                      <div id="tabTwo" class="hide" style="position: relative; top: 0px; left: 0px; display: none;">
                        <iframe width="100%" height="605" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.bg/maps?hl=en&amp;t=m&amp;layer=c&amp;cbll=42.144371,24.746086&amp;panoid=CZH76nsZGypQ6SgoisES0w&amp;cbp=12,324.8,,0,1.63&amp;ie=UTF8&amp;ll=42.14438,24.74616&amp;spn=0.0017,0.004128&amp;z=19&amp;source=embed&amp;output=svembed"></iframe>
                        <!--<p><a href="https://maps.google.bg/maps?hl=en&amp;t=m&amp;layer=c&amp;cbll=42.144371,24.746086&amp;panoid=CZH76nsZGypQ6SgoisES0w&amp;cbp=12,324.8,,0,1.63&amp;ie=UTF8&amp;ll=42.14438,24.74616&amp;spn=0.0017,0.004128&amp;z=19&amp;source=embed">View Larger Map</a></p>--> 
                      </div>
                      <!-- End of tabTwo --> 
                    </div>
                  </article>
                </section>
                <section id="contacts">
              <article>
                <div class="content">
                  <header>
                    <h2>Contacts</h2>
                    <address>
                      Non-profit organization "Hakafe"<br>
                      "Grozdov Pazar" №2, 4000 Plovdiv, Bulgaria
                    </address>
                    <div class="clear"></div>
                  </header>
                  <ul class="contactMembers">
                    <li>
                      <h3>Е-mail</h3>
                      <span class="mail">Chief</span> 
                      <a href="mailto:info@hackafe.org" title="info@hackafe.org">info@hackafe.org</a><br>
                      <span class="mail">Events</span>
                      <a href="mailto:events@hackafe.org" title="events@hackafe.org">events@hackafe.org</a><br>
                      <span class="mail">Finance</span>
                      <a href="mailto:finance@hackafe.org" title="finance@hackafe.org">finance@hackafe.org</a><br>
                      <span class="mail">Office Manager</span>
                      <a href="mailto:office@hackafe.org" title="office@hackafe.org">office@hackafe.org</a><br>           
                    </li>
                    <li>
                      <h3>E-mails</h3>
                      <span class="mail">Common</span> 
                      <a href="http://luna.superhosting.bg/mailman/listinfo/general_hackafe.org" rel="external" title="general@hackafe.org">general@hackafe.org</a><br>
                      <span class="mail">Announcement</span>
                      <a href="http://luna.superhosting.bg/mailman/listinfo/announce_hackafe.org" rel="external" title="announce@hackafe.org">announce@hackafe.org</a><br>
                      <span class="mail">Online system</span>
                      <a href="http://luna.superhosting.bg/mailman/listinfo/dev_hackafe.org" rel="external" title="dev@hackafe.org">dev@hackafe.org</a><br>
                    </li>
                  </ul>
                  <!-- End of contactMembers -->
                  <div class="clear"></div>
                </div>
              </article>
            </section>
            }
        };

    }
);