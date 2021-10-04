'use strict';
class AlarmClock {
    constructor() {
        this.alarmcollection = [];
        this.timerId = null;
    }
    addClock(time, callback, idTimer) {
        if(idTimer === undefined) {
            throw new Error("Невозможно идентифицировать будильник. Праметр id не передан.");
        } else if(this.alarmcollection.some((item, idx) => item.id === idTimer)) {
            return console.error("Будильник с таким id уже существует");
        }
        
        this.alarmcollection.push({
            id: idTimer,
            time: time,
            callback: callback
        });   
    }

    removeClock(idTimer) {
        // if(this.alarmcollection.findIndex((item, idx) => item.id === idTimer) != -1) {
        //     this.alarmcollection = this.alarmcollection.filter((item, id) => item.id != idTimer);
        //     return true;
        // } else {
        //     console.error(`Таймера с таким id = ${idTimer} не существует`));
        //     return false;
        // }
        let valueClock = this.alarmcollection.length;
        let alarmIdx = this.alarmcollection.findIndex((item, idx) => item.id === idTimer);
        
        if(alarmIdx === -1) {
            console.error(`Таймера с таким id = ${idTimer} не существует`);
            return false;
        } else {
            this.alarmcollection.splice(alarmIdx, 1);
            return true;
        }
    }


    getCurrentFormattedTime(upMin = 0) {
        let date = new Date();
        let hours = date.getHours();

        if(hours < 10) {
            hours = '0' + hours;
        }

        let minutes = date.getMinutes() + upMin;
        if(minutes >= 60 ) {
            minutes -= 60;
        }
        if(minutes < 10) {
            minutes = '0' + minutes;
        }
        return hours + ':' + minutes;
    }

    start() {
       const checkClock = (timer) => {
           if(timer.time === this.getCurrentFormattedTime()){
               timer.callback();
           }
       };

       if(this.timerId === null) {
           this.timerId = setInterval(() => {
               this.alarmcollection.forEach(checkClock);
           }, 10000);
       }
        
    }

    stop() {
        if(this.timerId === null) {
            throw new Error("Таймер интервала не задан!");
        }
        clearInterval(this.timerId);
        this.timerId = null;
    }
    printAlarms() {
        this.alarmcollection.forEach(item => console.log(`будильник номер ${item.id} заведен на  ${item.time}`));
    }

    clearAlarms() {
        clearInterval(this.timerId);

        this.alarmcollection.forEach((item, idx) => this.alarmcollection.splice(idx,1));
    }

}

function testCase (obj) {
    //создаем таймер
    obj = new AlarmClock();
    //добавляем будильники
    obj.addClock(obj.getCurrentFormattedTime(),() => console.log("Пора вставать"), 1);
    obj.addClock(obj.getCurrentFormattedTime(1),() => {console.log("Пора вставать!!!"); obj.removeClock(2)}, 2);

    obj.addClock(obj.getCurrentFormattedTime(2),() => {console.log("Вставай а то проспишь!");
    obj.clearAlarms();obj.printAlarms()}, 3);
    //ошибка с одинаковым идентификатором
    // obj.addClock(obj.getCurrentFormattedTime(5),() => console.log("Вставай а то проспишь!"), 1);
    //ошибка с незаданным id
    // obj.addClock(obj.getCurrentFormattedTime(1),() => console.log("Иди умываться!"));
    //3 будильника
    obj.printAlarms();

    //1 убрали
    obj.removeClock(3);

    // 2 будильника
    obj.printAlarms();
    // obj.start();
}





