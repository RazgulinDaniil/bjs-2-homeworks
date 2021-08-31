'use strict';
function solveEquation(a, b, c) {
  let arr = [];
  let D = Math.pow(b, 2)-4*a*c;
  if(D === 0) {
    arr.push(-b/(2*a));
  } if (D > 0) {
    let x = (-b + Math.sqrt(D) )/(2*a),
      y = (-b - Math.sqrt(D) )/(2*a);
      arr.push(x,y);
  }
  return arr; // array
}

// let endDate = new Date(2022, 8);
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  //вычисление срока кредита в месяцах
  function calcMounth(endDate) {
      let realDate = new Date(),

      realDateYear = realDate.getFullYear(),
      realDateMounth = realDate.getMonth() + 1;

      let endDateYear = endDate.getFullYear(),
        endDateMounth = endDate.getMonth();
      
      let loanPeriod;//срок кредита в месяцах
      let amountYear = endDateYear - realDateYear;//1

      if(amountYear < 0) {
        console.log(`параметр ${endDate} введен неверно`);
        return false;
      }

      loanPeriod = (endDateMounth - realDateMounth);
      loanPeriod = loanPeriod + (amountYear * 12);
      return loanPeriod;
    }
  date = calcMounth(date);
  
   //проверка данных на соответсвие 

   //1)
  // let array = ['percent','contribution','amount', 'date'];
  // for(let i = 0; i < arguments.length; i++) {
  //   while(typeof arguments[i] === 'string') {
  //     arguments[i] = +(arguments[i]);
  //   }
  //   if (typeof arguments[i] === 'number' && !isNaN(arguments[i]) && arguments[i] !== Infinity && arguments[i] !== -Infinity && arguments[i] >= 0) 
  //   {

  //       } else {
  //         console.log(`Параметр ${array[i]} содержит неправильное значение ${arguments[i]}`);
  //         return false;
  //       }
  //     }
  
  //2)
  let arra = {percent: percent,contribution: contribution, amount: amount, date: date};
  for(let key in arra) {
    while(typeof arra[key] === 'string') {
      arra[key] = +(arra[key]);
    }
    if (typeof arra[key] === 'number' && !isNaN(arra[key]) && arra[key] !== Infinity && arra[key] !== -Infinity && arra[key] >= 0) 
    {

        } else {
          console.log(`Параметр ${key} содержит неправильное значение ${arra[key]}`);
          return false;
        }
      }
  
  percent = percent / 100;//процентная ставка в год
  //подсчет процентной ставки в месяц 
  let percentMonth = percent / 12;

  let loanBody = amount - contribution;//тело кредита
   
  //6)подсчет ежемесячной оплаты
  //ЕП = ТК * (ПМ + ПМ/((Math.pow((1+ПМ), СК)- 1));

  let monthlyPayment = loanBody * (percentMonth + percentMonth/( (Math.pow((1+percentMonth), date) - 1)));

  //7)подсчет общей суммы выплат клиента
  //СуммаВыплат = ЕП * кол во месяцев

  totalAmount = monthlyPayment * date;
  //Math.floor(СуммаКредита * 100) / 100 );
  totalAmount = (Math.floor(totalAmount * 100) / 100);


  //9)Ввывод в консоль Вышы сумма кредита равна = Сумма кредита
  console.log(`Ваша сумма кредита равна = ${totalAmount}`);

  return totalAmount;
}

// const sum = calculateTotalMortgage(10, 0, 50000, endDate);

// console.log(sum);

