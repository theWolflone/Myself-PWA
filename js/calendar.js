let myselfCalendar = new Calendar({
      id: "#calendar",
      calendarSize: "large",
      headerColor: "#FFFFE2",
      weekdaysColor: "#FFFFE2",
      customMonthValues: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      customWeekdayValues: ["Lun", "Mar", "Mie", "Jue", "Ven", "Sab", "Dom"],
      fontFamilyHeader: "Quicksand",
      dateChanged: (currentDate, events) => {
            const events_display = document.querySelector('.events-display');
            let events_html = '';
            console.log(currentDate, events);
            events.forEach(event => {
              events_html += `
                <div class="event">
                  <div class="event-left">
                    <div class="event-title">${event.name}</div>
                    <a href="${event.url}" target="_blank" class="event-url">${event.url}</a>
                    <div class="event-topics">${
                      event.topics.map(topic => {
                        return `
                          <span class="event-topic">${topic}</span>
                        `;
                      }).join('')
                    }</div>
                  </div>
                  <div class="event-right ${event.free ? 'event-free' : 'event-paid'}">
                    <div class="${event.free ? 'event-free-text' : 'event-paid-text'}">${
                      event.free ? 'FREE' : 'PAID'
                    }</div>
                  </div>
                </div>
              `
            });
            if(events_html) {
              events_display.innerHTML = events_html;
            } else {
              events_display.innerHTML = '<div class="no-events-text">No events on this day :(</div>';
            }
      }     
});

(() => {
      events = [
            {
                "topics": [
                    "architecture",
                    "fullstack"
                ],
                "continentCode": "ON",
                "endDate": "2022-12-09T00:00:00.000Z",
                "twitter": "devternity",
                "startDate": "2022-12-08T00:00:00.000Z",
                "creator": "sFdb6nAkYjflAezbyZFsqqIkMm02",
                "url": "https://devternity.com",
                "countryCode": "ON",
                "best": true,
                "subtitle": "Turning developers into architects and engineering leaders",
                "category": "conference",
                "free": false,
                "creationDate": "2022-03-01T10:39:02.969Z",
                "name": "DevTernity - the top developer conference",
                "city": "Online",
                "favicon": "https://dev.events/logos/devternity.png",
                "featured": true,
                "country": "Online",
                "id": "dev-ternity-the-main-developer-conference-online-11-2022",
                "start": "2022-12-08T00:00:00.000Z",
                "end": "2022-12-09T00:00:00.000Z"
            },
            {
                "favicon": "https://dev.events/logos/principal.png",
                "name": "The Principal Dev – Masterclass for Tech Leads",
                "best": true,
                "twitter": "eduardsi",
                "subtitle": "Certification masterclass for experienced software engineers",
                "creator": "sFdb6nAkYjflAezbyZFsqqIkMm02",
                "topics": [
                    "leadership"
                ],
                "free": false,
                "city": "Online",
                "creationDate": "2022-03-23T08:34:00.895Z",
                "countryCode": "ON",
                "continentCode": "ON",
                "startDate": "2022-12-15T00:00:00.000Z",
                "endDate": "2022-12-16T00:00:00.000Z",
                "category": "masterclass",
                "featured": true,
                "url": "https://principal.dev",
                "country": "Online",
                "id": "principal-developer-online-5-2022",
                "start": "2022-12-15T00:00:00.000Z",
                "end": "2022-12-16T00:00:00.000Z"
            },
            {
                "twitter": "googlecloud",
                "creationDate": "2022-06-29T10:06:47.413Z",
                "name": "Google Cloud Next ’22",
                "category": "conference",
                "city": "Online",
                "topics": [
                    "cloud",
                    "devops"
                ],
                "countryCode": "ON",
                "continentCode": "ON",
                "free": true,
                "startDate": "2022-10-11T00:00:00.000Z",
                "endDate": "2022-10-13T00:00:00.000Z",
                "url": "https://cloud.withgoogle.com/next",
                "country": "Online",
                "id": "google-cloud-next-22-online-9-2022",
                "start": "2022-10-11T00:00:00.000Z",
                "end": "2022-10-13T00:00:00.000Z"
            },
            {
                "endDate": "2022-10-16T00:00:00.000Z",
                "category": "conference",
                "free": true,
                "url": "https://vuefes.jp/2022",
                "continentCode": "ON",
                "twitter": "vuefes",
                "city": "Online",
                "startDate": "2022-10-16T00:00:00.000Z",
                "creationDate": "2022-08-21T13:12:01.126Z",
                "countryCode": "ON",
                "topics": [
                    "javascript",
                    "web",
                    "react"
                ],
                "name": "Vue Fes Japan Online 2022",
                "country": "Online",
                "id": "vue-fes-japan-online-online-9-2022",
                "start": "2022-10-16T00:00:00.000Z",
                "end": "2022-10-16T00:00:00.000Z"
            },
            {
                "endDate": "2022-10-21T00:00:00.000Z",
                "continentCode": "ON",
                "startDate": "2022-10-17T00:00:00.000Z",
                "category": "conference",
                "name": "Coalesce 2022",
                "creator": "sFdb6nAkYjflAezbyZFsqqIkMm02",
                "countryCode": "ON",
                "city": "Online",
                "topics": [
                    "data"
                ],
                "free": false,
                "twitter": "dbt_labs",
                "url": "https://coalesce.getdbt.com",
                "creationDate": "2022-05-29T13:13:18.598Z",
                "country": "Online",
                "id": "coalesce-online-9-2022",
                "start": "2022-10-17T00:00:00.000Z",
                "end": "2022-10-21T00:00:00.000Z"
            },
            {
                "city": "Online",
                "twitter": "P99CONF",
                "name": "P99 CONF",
                "free": true,
                "url": "https://p99conf.io",
                "category": "conference",
                "creator": "sFdb6nAkYjflAezbyZFsqqIkMm02",
                "topics": [
                    "fullstack",
                    "architecture"
                ],
                "countryCode": "ON",
                "creationDate": "2022-05-17T09:14:06.730Z",
                "endDate": "2022-10-20T00:00:00.000Z",
                "startDate": "2022-10-19T00:00:00.000Z",
                "continentCode": "ON",
                "country": "Online",
                "id": "p99-conf-online-9-2022",
                "start": "2022-10-19T00:00:00.000Z",
                "end": "2022-10-20T00:00:00.000Z"
            },
            {
                "continentCode": "ON",
                "name": "Conf42 Kube Native 2022",
                "creator": "oPwCx7wUp3MndUtFsUr1yGobV7A2",
                "countryCode": "ON",
                "endDate": "2022-10-20T00:00:00.000Z",
                "city": "Online",
                "free": true,
                "startDate": "2022-10-20T00:00:00.000Z",
                "category": "conference",
                "twitter": "conf42com",
                "topics": [
                    "devops",
                    "cloud"
                ],
                "creationDate": "2022-03-27T18:39:52.955Z",
                "url": "https://conf42.com/kubenative2022",
                "country": "Online",
                "id": "conf42-kube-native-online-9-2022",
                "start": "2022-10-20T00:00:00.000Z",
                "end": "2022-10-20T00:00:00.000Z"
            },
            {
                "endDate": "2022-10-20T00:00:00.000Z",
                "continentCode": "ON",
                "countryCode": "ON",
                "category": "conference",
                "creationDate": "2021-11-18T15:56:51.311Z",
                "url": "https://conf42.com/web2022",
                "topics": [
                    "blockchain",
                    "fintech"
                ],
                "creator": "oPwCx7wUp3MndUtFsUr1yGobV7A2",
                "free": true,
                "city": "Online",
                "twitter": "conf42com",
                "startDate": "2022-10-20T00:00:00.000Z",
                "name": "Conf42 Web 3.0 2022",
                "country": "Online",
                "id": "conf42-web-3-0-online-9-2022",
                "start": "2022-10-20T00:00:00.000Z",
                "end": "2022-10-20T00:00:00.000Z"
            },
            {
                "startDate": "2022-10-25T00:00:00.000Z",
                "creationDate": "2022-06-25T12:04:52.569Z",
                "url": "https://enterpy.de/index.php",
                "category": "conference",
                "topics": [
                    "python"
                ],
                "countryCode": "ON",
                "free": false,
                "name": "enterPy 2022",
                "twitter": "enterpyconf",
                "continentCode": "ON",
                "endDate": "2022-10-25T00:00:00.000Z",
                "city": "Online",
                "country": "Online",
                "id": "enter-py-online-9-2022",
                "start": "2022-10-25T00:00:00.000Z",
                "end": "2022-10-25T00:00:00.000Z"
            },
            {
                "category": "conference",
                "startDate": "2022-10-25T00:00:00.000Z",
                "free": false,
                "city": "Online",
                "countryCode": "ON",
                "url": "https://nextjs.org/conf/oct22",
                "continentCode": "ON",
                "topics": [
                    "javascript",
                    "web",
                    "react"
                ],
                "endDate": "2022-10-25T00:00:00.000Z",
                "twitter": "vercel",
                "creationDate": "2022-09-04T19:33:34.145Z",
                "name": "Next.js conf",
                "country": "Online",
                "id": "next-js-conf-online-9-2022",
                "start": "2022-10-25T00:00:00.000Z",
                "end": "2022-10-25T00:00:00.000Z"
            },
            {
                "endDate": "2022-10-28T00:00:00.000Z",
                "free": false,
                "creationDate": "2022-05-04T11:33:59.221Z",
                "name": "Principal Developer (USA Time Zone)",
                "topics": [
                    "leadership"
                ],
                "creator": "sFdb6nAkYjflAezbyZFsqqIkMm02",
                "startDate": "2022-10-27T00:00:00.000Z",
                "url": "https://principal.dev",
                "twitter": "eduardsi",
                "continentCode": "ON",
                "category": "masterclass",
                "countryCode": "ON",
                "city": "Online",
                "country": "Online",
                "id": "principal-developer-usa-time-zone-online-9-2022",
                "start": "2022-10-27T00:00:00.000Z",
                "end": "2022-10-28T00:00:00.000Z"
            },
            {
                "city": "Online",
                "name": "Global XR Conference",
                "continentCode": "ON",
                "url": "https://globalxrconference.com",
                "category": "conference",
                "endDate": "2022-11-04T00:00:00.000Z",
                "startDate": "2022-11-03T00:00:00.000Z",
                "countryCode": "ON",
                "free": true,
                "twitter": "globxrcommunity",
                "topics": [
                    "vr"
                ],
                "creationDate": "2022-09-24T19:45:20.193Z",
                "country": "Online",
                "id": "global-xr-conference-online-10-2022",
                "start": "2022-11-03T00:00:00.000Z",
                "end": "2022-11-04T00:00:00.000Z"
            },
            {
                "startDate": "2022-11-03T00:00:00.000Z",
                "twitter": "TestJSSummit",
                "continentCode": "ON",
                "topics": [
                    "javascript",
                    "web",
                    "react"
                ],
                "creationDate": "2022-08-30T12:45:40.197Z",
                "url": "https://testjssummit.com",
                "countryCode": "ON",
                "city": "Online",
                "name": "TestJS Summit",
                "free": false,
                "category": "conference",
                "endDate": "2022-11-04T00:00:00.000Z",
                "country": "Online",
                "id": "test-js-summit-online-10-2022",
                "start": "2022-11-03T00:00:00.000Z",
                "end": "2022-11-04T00:00:00.000Z"
            },
            {
                "startDate": "2022-11-08T00:00:00.000Z",
                "category": "conference",
                "creationDate": "2022-10-01T09:06:41.835Z",
                "free": true,
                "topics": [
                    "fullstack",
                    "architecture"
                ],
                "twitter": "githubuniverse",
                "city": "Online",
                "endDate": "2022-11-09T00:00:00.000Z",
                "url": "https://githubuniverse.com",
                "countryCode": "ON",
                "name": "GitHub Universe",
                "continentCode": "ON",
                "country": "Online",
                "id": "git-hub-universe-online-10-2022",
                "start": "2022-11-08T00:00:00.000Z",
                "end": "2022-11-09T00:00:00.000Z"
            },
            {
                "countryCode": "ON",
                "continentCode": "ON",
                "startDate": "2022-11-08T00:00:00.000Z",
                "creationDate": "2022-08-12T14:24:16.315Z",
                "endDate": "2022-11-10T00:00:00.000Z",
                "name": ".NET Conf 2022",
                "free": true,
                "twitter": "dotnetfdn",
                "topics": [
                    "dotnet"
                ],
                "category": "conference",
                "url": "https://dotnetconf.net",
                "city": "Online",
                "country": "Online",
                "id": "net-conf-online-10-2022",
                "start": "2022-11-08T00:00:00.000Z",
                "end": "2022-11-10T00:00:00.000Z"
            },
            {
                "twitter": "snyksec",
                "continentCode": "ON",
                "city": "Online",
                "url": "https://snyk.io/snykcon",
                "category": "conference",
                "free": false,
                "creationDate": "2022-03-12T16:47:17.136Z",
                "name": "SnykCon 2022",
                "endDate": "2022-11-10T00:00:00.000Z",
                "startDate": "2022-11-08T00:00:00.000Z",
                "topics": [
                    "security"
                ],
                "countryCode": "ON",
                "creator": "sFdb6nAkYjflAezbyZFsqqIkMm02",
                "country": "Online",
                "id": "snyk-con-online-10-2022",
                "start": "2022-11-08T00:00:00.000Z",
                "end": "2022-11-10T00:00:00.000Z"
            },
            {
                "free": true,
                "creationDate": "2022-10-02T20:10:07.736Z",
                "startDate": "2022-11-09T00:00:00.000Z",
                "twitter": "adobedevs",
                "endDate": "2022-11-09T00:00:00.000Z",
                "continentCode": "ON",
                "city": "Online",
                "category": "conference",
                "topics": [
                    "web",
                    "javascript",
                    "react"
                ],
                "url": "https://developerevents.adobe.com/events/details/adobe-developer-events-developer-experience-presents-adobe-developers-live-headless",
                "countryCode": "ON",
                "name": "Adobe Developers Live: Headless",
                "country": "Online",
                "id": "adobe-developers-live-headless-online-10-2022",
                "start": "2022-11-09T00:00:00.000Z",
                "end": "2022-11-09T00:00:00.000Z"
            },
            {
                "url": "https://altinity.com/osa-con",
                "startDate": "2022-11-15T00:00:00.000Z",
                "twitter": "AltinityDB",
                "category": "conference",
                "continentCode": "ON",
                "topics": [
                    "data"
                ],
                "endDate": "2022-11-15T00:00:00.000Z",
                "creationDate": "2022-08-17T13:36:10.757Z",
                "countryCode": "ON",
                "city": "Online",
                "name": "Open Source Analytics Conference",
                "free": true,
                "country": "Online",
                "id": "open-source-analytics-conference-online-10-2022",
                "start": "2022-11-15T00:00:00.000Z",
                "end": "2022-11-15T00:00:00.000Z"
            },
            {
                "topics": [
                    "qa"
                ],
                "continentCode": "ON",
                "endDate": "2022-11-16T00:00:00.000Z",
                "category": "conference",
                "twitter": "ParisTestConf",
                "creationDate": "2022-05-29T13:19:35.173Z",
                "city": "Online",
                "countryCode": "ON",
                "startDate": "2022-11-15T00:00:00.000Z",
                "free": true,
                "creator": "sFdb6nAkYjflAezbyZFsqqIkMm02",
                "url": "https://paristestconf.com",
                "name": "ParisTestConf",
                "country": "Online",
                "id": "paris-test-conf-online-10-2022",
                "start": "2022-11-15T00:00:00.000Z",
                "end": "2022-11-16T00:00:00.000Z"
            },
            {
                "city": "Online",
                "startDate": "2022-11-16T00:00:00.000Z",
                "endDate": "2022-11-17T00:00:00.000Z",
                "category": "conference",
                "countryCode": "ON",
                "free": true,
                "twitter": "neo4j",
                "topics": [
                    "data"
                ],
                "url": "https://neo4j.com/nodes-2022",
                "continentCode": "ON",
                "name": "NODES 2022",
                "creationDate": "2022-08-22T11:01:35.589Z",
                "country": "Online",
                "id": "nodes-online-10-2022",
                "start": "2022-11-16T00:00:00.000Z",
                "end": "2022-11-17T00:00:00.000Z"
            },
            {
                "continentCode": "ON",
                "category": "conference",
                "name": "Conf42 JavaScript 2022",
                "free": true,
                "countryCode": "ON",
                "city": "Online",
                "endDate": "2022-11-17T00:00:00.000Z",
                "startDate": "2022-11-17T00:00:00.000Z",
                "topics": [
                    "javascript",
                    "web",
                    "react"
                ],
                "twitter": "conf42com",
                "url": "https://conf42.com/js2022",
                "creator": "oPwCx7wUp3MndUtFsUr1yGobV7A2",
                "creationDate": "2021-11-18T16:04:35.732Z",
                "country": "Online",
                "id": "conf42-java-script-online-10-2022",
                "start": "2022-11-17T00:00:00.000Z",
                "end": "2022-11-17T00:00:00.000Z"
            },
            {
                "startDate": "2022-11-22T00:00:00.000Z",
                "creationDate": "2022-04-07T07:11:17.023Z",
                "twitter": "BlockchainHQ",
                "creator": "sFdb6nAkYjflAezbyZFsqqIkMm02",
                "city": "Online",
                "category": "conference",
                "url": "https://blockchainvsummit.com",
                "name": "Blockchain Summit",
                "free": true,
                "continentCode": "ON",
                "topics": [
                    "blockchain",
                    "fintech"
                ],
                "countryCode": "ON",
                "endDate": "2022-11-22T00:00:00.000Z",
                "country": "Online",
                "id": "blockchain-summit-online-10-2022",
                "start": "2022-11-22T00:00:00.000Z",
                "end": "2022-11-22T00:00:00.000Z"
            },
            {
                "endDate": "2022-11-24T00:00:00.000Z",
                "name": "Big Data Conference Europe",
                "city": "Online",
                "continentCode": "ON",
                "category": "conference",
                "creationDate": "2022-06-21T12:26:59.397Z",
                "topics": [
                    "data"
                ],
                "countryCode": "ON",
                "twitter": "BigDataConfEU",
                "free": false,
                "startDate": "2022-11-23T00:00:00.000Z",
                "url": "https://bigdataconference.eu",
                "country": "Online",
                "id": "big-data-conference-europe-online-10-2022",
                "start": "2022-11-23T00:00:00.000Z",
                "end": "2022-11-24T00:00:00.000Z"
            },
            {
                "topics": [
                    "architecture",
                    "fullstack"
                ],
                "name": "QCon Plus Online Software Conference 2022",
                "category": "conference",
                "url": "https://plus.qconferences.com",
                "creationDate": "2022-01-13T16:34:55.915Z",
                "city": "Online",
                "creator": "5mRqjkYZI9Q2cvcviI4pUHKIne42",
                "free": false,
                "startDate": "2022-11-29T00:00:00.000Z",
                "continentCode": "ON",
                "countryCode": "ON",
                "endDate": "2022-12-09T00:00:00.000Z",
                "country": "Online",
                "id": "q-con-plus-online-software-conference-online-10-2022",
                "start": "2022-11-29T00:00:00.000Z",
                "end": "2022-12-09T00:00:00.000Z"
            },
            {
                "twitter": "xtremejsconf",
                "free": false,
                "countryCode": "ON",
                "creator": "sFdb6nAkYjflAezbyZFsqqIkMm02",
                "startDate": "2022-11-29T00:00:00.000Z",
                "name": "The XtremeJS",
                "creationDate": "2022-05-06T12:41:17.709Z",
                "topics": [
                    "javascript",
                    "web",
                    "react"
                ],
                "category": "conference",
                "city": "Online",
                "endDate": "2022-11-29T00:00:00.000Z",
                "continentCode": "ON",
                "url": "https://xtremejs.dev/2022",
                "country": "Online",
                "id": "the-xtreme-js-online-10-2022",
                "start": "2022-11-29T00:00:00.000Z",
                "end": "2022-11-29T00:00:00.000Z"
            },
            {
                "category": "conference",
                "twitter": "conf42com",
                "countryCode": "ON",
                "url": "https://conf42.com/devsecops2022",
                "city": "Online",
                "creator": "sFdb6nAkYjflAezbyZFsqqIkMm02",
                "creationDate": "2022-02-08T11:13:38.406Z",
                "endDate": "2022-12-01T00:00:00.000Z",
                "startDate": "2022-12-01T00:00:00.000Z",
                "free": false,
                "name": "Conf42: DevSecOps 2022",
                "continentCode": "ON",
                "topics": [
                    "security"
                ],
                "country": "Online",
                "id": "conf42-dev-sec-ops-online-11-2022",
                "start": "2022-12-01T00:00:00.000Z",
                "end": "2022-12-01T00:00:00.000Z"
            },
            {
                "startDate": "2022-12-01T00:00:00.000Z",
                "url": "https://pydata.org/global2022",
                "topics": [
                    "python"
                ],
                "twitter": "PyDataGlobal",
                "name": "PyData Global 2022",
                "creationDate": "2022-10-03T18:27:59.376Z",
                "free": false,
                "continentCode": "ON",
                "city": "Online",
                "countryCode": "ON",
                "endDate": "2022-12-03T00:00:00.000Z",
                "category": "conference",
                "country": "Online",
                "id": "py-data-global-online-11-2022",
                "start": "2022-12-01T00:00:00.000Z",
                "end": "2022-12-03T00:00:00.000Z"
            },
            {
                "name": "Architecture with Agility (Kevlin Henney)",
                "category": "masterclass",
                "city": "Online",
                "creationDate": "2022-03-08T13:09:17.321Z",
                "url": "https://devternity.com#AGILE_ARCHITECTURE",
                "startDate": "2022-12-09T00:00:00.000Z",
                "favicon": "https://pbs.twimg.com/profile_images/1452748283/DSC_0065__Reduced__Cropped__400x400.jpg",
                "continentCode": "ON",
                "endDate": "2022-12-09T00:00:00.000Z",
                "creator": "sFdb6nAkYjflAezbyZFsqqIkMm02",
                "countryCode": "ON",
                "twitter": "devternity",
                "topics": [
                    "architecture",
                    "agile",
                    "fullstack"
                ],
                "free": false,
                "country": "Online",
                "id": "architecture-with-agility-online-11-2022",
                "start": "2022-12-09T00:00:00.000Z",
                "end": "2022-12-09T00:00:00.000Z"
            },
            {
                "favicon": "https://dev.events/logos/holub.png",
                "twitter": "devternity",
                "category": "masterclass",
                "city": "Online",
                "countryCode": "ON",
                "free": false,
                "endDate": "2022-12-09T00:00:00.000Z",
                "name": "Incremental Architecture (Allen Holub)",
                "url": "https://devternity.com#ALLEN",
                "creationDate": "2022-06-23T06:40:21.193Z",
                "continentCode": "ON",
                "startDate": "2022-12-09T00:00:00.000Z",
                "topics": [
                    "architecture",
                    "fullstack"
                ],
                "country": "Online",
                "id": "building-an-incremental-architecture-online-11-2022",
                "start": "2022-12-09T00:00:00.000Z",
                "end": "2022-12-09T00:00:00.000Z"
            },
            {
                "startDate": "2022-12-09T00:00:00.000Z",
                "countryCode": "ON",
                "city": "Online",
                "creationDate": "2022-03-08T13:09:52.055Z",
                "twitter": "devternity",
                "url": "https://devternity.com/#CLEAN_PRAG",
                "free": false,
                "creator": "sFdb6nAkYjflAezbyZFsqqIkMm02",
                "topics": [
                    "architecture",
                    "fullstack",
                    "java"
                ],
                "endDate": "2022-12-09T00:00:00.000Z",
                "continentCode": "ON",
                "category": "masterclass",
                "name": "Clean and Pragmatic Architecture",
                "favicon": "https://pbs.twimg.com/profile_images/1031254204038504448/m_iWHALY_400x400.jpg",
                "country": "Online",
                "id": "clean-and-pragmatic-architecture-online-11-2022",
                "start": "2022-12-09T00:00:00.000Z",
                "end": "2022-12-09T00:00:00.000Z"
            }
        ]

        myselfCalendar.setEventsData(events);
        if(Object.keys(myselfCalendar.eventDayMap).length === 0) {
          myselfCalendar.updateCurrentDate(1);
        }
})();







