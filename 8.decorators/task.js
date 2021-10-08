function cachingDecoratorNew(func) {
  let cashe = [];
  return (...args) => {
    const hash = args.join(",");
    let idx = cashe.findIndex(item => item.hash === hash);
      if(idx !== -1) {
        console.log("Из кэша: " + cashe[idx].value);
        return "Из кэша: " + cashe[idx].value;
      }
      let res = func.apply(this,args);
      cashe.push({"hash":hash , "value": res});
      if(cashe.length > 5) {
        cashe.shift();
      }
      console.log("Вычисляем: " + res);
      return "Вычисляем: " + res;
    };
}


function debounceDecoratorNew(func,ms) {
  let lastMoment = 0;
  return (...args) => {
    if(lastMoment + ms > Date.now()) {
      console.log("ignore");
      return;
    }
    func.apply(this, args);
    lastMoment = Date.now();
  };
}

const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecorator2(debounceDecoratorNew(sendSignal, 2000));
setTimeout(upgradedSendSignal); // Сигнал отправлен
setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс
setTimeout(upgradedSendSignal, 900); // проигнорировано аналогично
setTimeout(upgradedSendSignal, 1200); // проигнорировано аналогично
setTimeout(upgradedSendSignal, 2300); // проигнорировано аналогично  будет отправлен тк прошло 2100мс
setTimeout(upgradedSendSignal, 4400); // Сигнал отправлен
setTimeout(upgradedSendSignal, 4500); // проигнорировано аналогично


function debounceDecorator2(func) {
  wrapper.count = 0;
  function wrapper (...args) {
    wrapper.count++;
    return func.apply(this, args);
  }
  return wrapper;
}
