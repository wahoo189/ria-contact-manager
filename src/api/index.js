/**
 * This is a simple API that mocks the actions you might expect from an online service.
 */

import * as generateId from 'uuid/v4';

let cats = [
  {
    id: generateId(),
    name: 'Boots',
    img: 'http://cdn1-www.cattime.com/assets/uploads/2015/06/affection3.png',
  },
  {
    id: generateId(),
    name: 'Precious',
    img: 'https://media.giphy.com/media/kLALBwFNGHcGY/giphy.gif',
  },
  {
    id: generateId(),
    name: 'Tommy',
    img: 'http://cdn3-www.cattime.com/assets/uploads/2015/06/shredding3.png',
  },
];

const updateCats = (cat) => {
  const newCat = {
    ...cat,
    id: generateId(),
  };

  cats = [
    ...cats,
    newCat,
  ];

  return new Promise(resolve => resolve(cats));
};

const api = {
  getCats: () => new Promise(resolve => resolve(cats)),
  addCat: cat => updateCats(cat),
};

export default api;
