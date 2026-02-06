const category = {
  name: 'Work',
  icon: '/images/icon-work.svg',
  color: 'bg-orange-300a',
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

let dashboard = document.getElementById('dashboard');

function makeCard(name, color, icon, hrsCurrent, hrsPrevious) {
  let card = document.createElement('div');
  card.classList.add(`bg-[url('${icon}')]`); // ICON
  card.classList.add(color); // COLOR
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

dashboard.appendChild(
  makeCard(category.name, category.color, category.icon, '5', '7'),
);
let timeframe = 'daily';

function dummyLog(inKrams) {
  console.log(inKrams);
}

fetch('/data.json')
  .then((response) => {
    if (!response.ok) return console.log('Oops! Something went wrong.');

    return response.json();
  })
  .then((data) => {
    console.log(data);
    if (timeframe === 'daily') {
      data.forEach((element) => {
        dashboard.appendChild(
          makeCard(
            element.title,
            category.color,
            category.icon,
            element.timeframes.daily.current,
            element.timeframes.daily.previous,
          ),
        );
        dummyLog(element.timeframes.daily.current);
      });
    }
  });
