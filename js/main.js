//Функция рандомных чисел
function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const ID = getRandomPositiveInteger(0, 25);

const URL = `photos/${getRandomPositiveInteger(1,25)}.jpg`;


const DESCRIPTION = 'Прекрасное фото на фоне заката';

const LIKES = getRandomPositiveInteger(15, 200);

const COMMENTS = [
  {
    id: getRandomPositiveInteger(1, 20),
    avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
    message: 'В целом всё неплохо. Но не всё.',
    name: 'Артём',
  },
  {
    id: getRandomPositiveInteger(21, 40),
    avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
    message: 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    name: 'Алексей',
  },
  {
    id: getRandomPositiveInteger(41, 60),
    avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
    message: 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    name: 'Саша',
  },
  {
    id: getRandomPositiveInteger(61, 80),
    avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
    message: 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    name: 'Костя',
  },
  {
    id: getRandomPositiveInteger(81, 100),
    avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
    message: 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
    name: 'Настя',
  },
];

const getDescription = function () {
  return {
    id: ID,
    url: URL,
    description: DESCRIPTION,
    likes: LIKES,
    comments: COMMENTS[getRandomPositiveInteger(0, length-1)],
  };
};

getDescription();
