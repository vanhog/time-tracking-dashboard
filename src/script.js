const category = {
  Work: { icon: '/images/icon-work.svg', color: 'bg-orange-300a' },
  Play: { icon: '/images/icon-play.svg', color: 'bg-navy-200' },
  Study: { icon: '/images/icon-study.svg', color: 'bg-pink-300' },
  Exercise: { icon: '/images/icon-exercise.svg', color: 'bg-green-400' },
  Social: { icon: '/images/icon-social.svg', color: 'bg-purple-400' },
  'Self Care': { icon: '/images/icon-self-care.svg', color: 'bg-yellow-300' },
};
var defaultsettings = {
  ajaxsettings: { ak1: 'v1', ak2: 'v2' },
  uisettings: { ui1: 'v1', ui22: 'v2' },
};

cardDataHeaderClasses = [
  'flex',
  'flex-row',
  'justify-between',
  'items-center',
  'w-full',
  'font-rubik',
  'font-medium',
  'text-[18px]',
  'leading-5.25',
  'tracking-normal',
  'text-white',
];

cardDataTimeClasses = [
  'flex',
  'flex-row',
  'justify-between',
  'items-center',
  'w-full',
  'text-white',
];

let dashboard = document.getElementById('tracking-container');

function makeCard(name, color, icon, hrsCurrent, hrsPrevious) {
  let card = document.createElement('div');
  card.classList.add(`bg-[url('${category[name].icon}')]`); // ICON
  card.classList.add(category[name].color); // COLOR
  card.classList.add('card-container');

  let cardData = document.createElement('div');
  cardData.classList.add('card-data');
  let cardDataHeader = document.createElement('div');

  cardDataHeaderClasses.forEach((element) => {
    cardDataHeader.classList.add(element);
  });

  let cardDataHeaderCategory = document.createElement('div');
  cardDataHeaderCategory.innerText = name; // NAME
  let cardDataHeaderDots = document.createElement('div');
  cardDataHeaderDots.innerText = '...';
  cardDataHeader.appendChild(cardDataHeaderCategory);
  cardDataHeader.appendChild(cardDataHeaderDots);
  cardData.appendChild(cardDataHeader);

  let cardDataTime = document.createElement('div');
  cardDataTimeClasses.forEach((element) => {
    cardDataTime.classList.add(element);
  });

  let cardDataTimeHoursCurent = document.createElement('div');
  cardDataTimeHoursCurent.classList.add('text-preset-3');
  let cardDataTimeHoursPrevious = document.createElement('div');
  cardDataTimeHoursPrevious.classList.add('text-navy-200');
  cardDataTimeHoursCurent.innerText = hrsCurrent + 'hrs';
  cardDataTimeHoursPrevious.innerText = 'Previous - ' + hrsPrevious + 'hrs';
  cardDataTime.appendChild(cardDataTimeHoursCurent);
  cardDataTime.appendChild(cardDataTimeHoursPrevious);
  cardData.appendChild(cardDataTime);

  card.appendChild(cardData);
  return card;
}

function populateDashboard(inTimeframe) {
  fetch('/data.json')
    .then((response) => {
      if (!response.ok) return console.log('Oops! Something went wrong.');

      return response.json();
    })
    .then((data) => {
      data.forEach((element) => {
        dashboard.appendChild(
          makeCard(
            element.title,
            category.color,
            category.icon,
            element.timeframes[inTimeframe].current,
            element.timeframes[inTimeframe].previous,
          ),
        );
      });
    });
}

populateDashboard('weekly');
