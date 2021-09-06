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


function calculateTotalMortgage(percent , contribution, amount, date) {
  let totalAmount;

  if(isNaN(Number(percent)) === true) {
    return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  } else if(isNaN(Number(contribution)) === true) {
    return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
  } else if(isNaN(Number(amount)) === true) {
    return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
  }
  //вычисление срока кредита в месяцах
  function calcMonth(endDate) {
      let realDate = new Date(),

      realDateYear = realDate.getFullYear(),
      realDateMounth = realDate.getMonth();

      let endDateYear = endDate.getFullYear();
      let endDateMounth = endDate.getMonth();
      
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
  date = calcMonth(date);

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
  totalAmount = (Math.round(totalAmount * 100) / 100);

  
  //9)Ввывод в консоль Вышы сумма кредита равна = Сумма кредита
  return totalAmount;
}

// let endDate = new Date(2022, 8);
// const sum = calculateTotalMortgage(10, 1000, 50000, endDate);
//console.log(`Ваша сумма кредита равна = ${sum}`);


