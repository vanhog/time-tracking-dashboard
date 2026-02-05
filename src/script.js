const category = {
  name: 'work',
  icon: '/images/icon-work.svg',
  color: 'bg-orange-300a',
};

cardDataClasses = [
  'flex',
  'flex-row',
  'justify-between',
  'items-center',
  'w-full',
  'text-preset-5m',
  'text-white',
];

let dashboard = document.getElementById('dashboard');

let card = document.createElement('div');
card.classList.add(`bg-[url('${category.icon}')]`);
card.classList.add(category.color);
card.classList.add('card-container');

let cardData = document.createElement('div');
cardData.classList.add('card-data');
let cardDataHeader = document.createElement('div');

cardDataClasses.forEach((element) => {
  cardDataHeader.classList.add(element);
});

let cardDataHeaderCategory = document.createElement('div');
cardDataHeaderCategory.innerText = category.name;
let cardDataHeaderDots = document.createElement('div');
cardDataHeaderDots.innerText = '...';
cardDataHeader.appendChild(cardDataHeaderCategory);
cardDataHeader.appendChild(cardDataHeaderDots);
cardData.appendChild(cardDataHeader);

card.appendChild(cardData);

dashboard.appendChild(card);
