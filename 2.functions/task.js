// Задание 1
function getArrayParams(arr) {
  let min,max,sum,avg;
  min = Infinity; 
  max = -Infinity;
  sum = 0;
  arr.forEach(arg => {
    sum += arg;
    if(arg > max) {
      max = arg;
    }
    if(arg < min) {
      min = arg;
    }
  });
  avg = (sum/arr.length).toFixed(2);//среднее арифметиеское 
  avg = +avg;//первый способ
  // avg = (Math.round((sum/arr.length) * 100) / 100);//второй способ
  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  arr.forEach(e => sum += e);
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  arrOfArr.forEach(e => {
    if(func(e) > max) {
      max = func(e);
    }
  });

  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код 
  let min = Infinity;
  let max = -Infinity;

  arr.forEach(e => {
    if(e > max) {
      max = e;
    }
    if(e < min) {
      min = e;
    }
  });
  function findrange() {
    if(max > 0 && min > 0) {
      return max - min;
    }
    if(max < 0 && min < 0) {
      return -min + max;
    }
    return  -min + max;
  }
  let range = findrange();
  return range;
}
let arrOfAr = [[-10, -20, -40], [10, 20, 30]];
  console.log(makeWork(arrOfAr, worker2));
