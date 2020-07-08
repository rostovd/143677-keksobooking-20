'use strict';


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; // Максимум не включается, минимум включается
}


function generateMockItems() {
  var el = document.querySelector('.map');
  var maximumX = el.offsetWidth;
  var arrOfTypes = ['palace', 'flat', 'house', 'bungalo'];
  var arrOfTime = ['12:00', '13:00', '14:00'];
  var arrOfFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  var arrOfPics = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

  var items = [];
  for (var i = 0; i < 8; i++) {
    var obj = {
      author: {
        avatar: 'img/avatars/user' + '0' + (i + 1) + '.png'
      },
      offer: {
        title: 'Title ' + i + 1,
        price: getRandomInt(1, 9998),
        type: arrOfTypes[getRandomInt(1, 4)],
        rooms: getRandomInt(1, 6),
        guests: getRandomInt(1, 5),
        checkin: arrOfTime[getRandomInt(1, 3)],
        checkout: arrOfTime[getRandomInt(1, 3)],
        features: arrOfFeatures[getRandomInt(1, 6)],
        description: 'Description',
        photos: arrOfPics[getRandomInt(1, 3)],
      },
      location: {
        x: getRandomInt(0, maximumX),
        y: getRandomInt(130, 630)
      }
    };

    items.push(obj);
  }

  return items;
}

var mapItems = generateMockItems();

var map = document.querySelector('.map');

mapItems.forEach(function (item) {
  var template = document.querySelector('#pin');
  var button = template.content.querySelector('button');
  button.style.left = item.location.x + 'px';
  button.style.top = item.location.y + 'px';
  var clone = document.importNode(template.content, true);
  map.appendChild(clone);
});


// eslint-disable-next-line
console.log(mapItems);
