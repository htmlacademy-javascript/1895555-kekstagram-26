//Функция рандомных чисел

function getRandom(min, max) {
  if (min >= 0 && max >= 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rand = Math.random() * (max - min + 1) + min; //Максимум и минимум включаются
    return Math.floor(rand);
  }
  return false;
}

getRandom();

//Функция для проверки максимальной длины строки

function checkingMaxLongesString (checkingString, maxLonges){
  if (checkingString && maxLonges<=140){
    return true;
  }
  return false;
}
checkingMaxLongesString();
