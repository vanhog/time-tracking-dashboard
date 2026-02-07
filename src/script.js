const category = {
  Work: { icon: '/images/icon-work.svg', color: 'bg-orange-300a' },
  Play: { icon: '/images/icon-play.svg', color: 'bg-navy-200' },
  Study: { icon: '/images/icon-study.svg', color: 'bg-pink-300' },
  Exercise: { icon: '/images/icon-exercise.svg', color: 'bg-green-400' },
  Social: { icon: '/images/icon-social.svg', color: 'bg-purple-400' },
  'Self Care': { icon: '/images/icon-self-care.svg', color: 'bg-yellow-300' },
};

cardDataHeaderClasses = [
  'flex',
  'flex-row',
  'justify-between',
  'items-center',
  'w-full',
  'font-rubik',
  'font-medium',
  'text-[1.25rem]',
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

let trackingContainer = document.getElementById('tracking-container');

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

  let cardDataHeaderCategory = document.createElement('h2');
  cardDataHeaderCategory.innerText = name; // NAME
  let cardDataHeaderDots = document.createElement('button');
  cardDataHeaderDots.setAttribute('aria-label', 'Open options');
  cardDataHeaderDots.setAttribute('aria-haspopup', 'menu');
  cardDataHeaderDots.setAttribute('aria-expanded', 'false');
  cardDataHeaderDots.innerHTML =
    '<span class="hover:font-bold" aria-hidden="true">...</span>';
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
  cardDataTimeHoursCurent.innerHTML = `<span class="sr-only">Current - </span>${hrsCurrent}<span class="sr-only">hours</span><span aria-hidden="true">hrs</span>`;

  cardDataTimeHoursPrevious.innerHTML = `Previous - ${hrsPrevious}<span class="sr-only">hours</span><span aria-hidden="true">hrs</span>`;
  cardDataTime.appendChild(cardDataTimeHoursCurent);
  cardDataTime.appendChild(cardDataTimeHoursPrevious);
  cardData.appendChild(cardDataTime);

  card.appendChild(cardData);
  return card;
}

function populateTrackingContainer(inTimeframe) {
  fetch('/data.json')
    .then((response) => {
      if (!response.ok) return console.log('Oops! Something went wrong.');

      return response.json();
    })
    .then((data) => {
      if (trackingContainer.hasChildNodes()) {
        trackingContainer.innerHTML = '';
      }
      data.forEach((element) => {
        trackingContainer.appendChild(
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

const daily = document.getElementById('daily').addEventListener('click', () => {
  populateTrackingContainer('daily');
});

const weekly = document
  .getElementById('weekly')
  .addEventListener('click', () => {
    populateTrackingContainer('weekly');
  });

const monthly = document
  .getElementById('monthly')
  .addEventListener('click', () => {
    populateTrackingContainer('monthly');
  });

populateTrackingContainer('weekly');
