//Функция рандомных чисел
function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const ID = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25
];

const URL = [
  'photos/1.jpg',
  'photos/2.jpg',
  'photos/3.jpg',
  'photos/4.jpg',
  'photos/5.jpg',
  'photos/6.jpg',
  'photos/7.jpg',
  'photos/8.jpg',
  'photos/9.jpg',
  'photos/10.jpg',
  'photos/11.jpg',
  'photos/12.jpg',
  'photos/13.jpg',
  'photos/14.jpg',
  'photos/15.jpg',
  'photos/16.jpg',
  'photos/17.jpg',
  'photos/18.jpg',
  'photos/19.jpg',
  'photos/20.jpg',
  'photos/21.jpg',
  'photos/22.jpg',
  'photos/23.jpg',
  'photos/24.jpg',
  'photos/25.jpg',
];

const DESCRIPTION = 'Прекрасное фото на фоне заката';

const LIKES = getRandomPositiveInteger(15, 200);

const COMMENTS = []; // объявляем массив
COMMENTS[0] = {
  id: getRandomPositiveInteger(1, 20),
  avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Артём',
};
COMMENTS[1] = {
  id: getRandomPositiveInteger(21, 40),
  avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
  message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  name: 'Алексей',
};
COMMENTS[2] = {
  id: getRandomPositiveInteger(41, 60),
  avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
  message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  name: 'Саша',
};
COMMENTS[3] = {
  id: getRandomPositiveInteger(61, 80),
  avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
  message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  name: 'Костя',
};
COMMENTS[4] = {
  id: getRandomPositiveInteger(81, 100),
  avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
  message: 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  name: 'Настя',
};

const getDescription = function() {
  return {
    id: ID[getRandomPositiveInteger(0, length - 1)],
    url: URL[getRandomPositiveInteger(0, length - 1)],
    description: DESCRIPTION,
    likes: LIKES,
    comments: COMMENTS[getRandomPositiveInteger(0, length - 1)],
  };
};

getDescription();
