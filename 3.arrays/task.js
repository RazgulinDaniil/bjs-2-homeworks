'use strict';
function compareArrays(arr1, arr2) {
  let result;
  // функция сравнения двух массивов
  // boolean
  result = (arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]));
  return result;
}

function advancedFilter(arr) {
  let resultArr;
  // Ваш код

  resultArr = arr.filter(item => item > 0 && item % 3 === 0).map(item => item * 10);
  return resultArr; // array
}
console.log(advancedFilter([-10, -21, 12, 123]));