/**
 * @param {*} array array of integers
 */
const bubleSort = (array) => {
  let arraySort = [...array];
  const lng = arraySort.length;
  let stop = false;
  for (let i = 0; i < lng; i++) {
    stop = false;
    for (let j = 0; j < lng - i; j++) {
      const current = arraySort[j];
      const adjacent = arraySort[j + 1];
      if (current > adjacent) {
        [arraySort[j], arraySort[j + 1]] = [adjacent, current];
        stop = true;
      }
    }
    if (!stop) {
      break;
    }
  }
  return arraySort;
};

const buildArray = (qty) => {
  let array = [];
  for (let index = 0; index < qty; index++) {
    array.push(Math.floor(Math.random() * 100));
  }
  return array;
};

const array = buildArray(20);
console.log(bubleSort(array));
