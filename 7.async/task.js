'use strict';
class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callback, idTimer) {
        if(idTimer === undefined) {
            throw new Error("Невозможно идентифицировать будильник. Праметр id не передан.");
        } else if(this.alarmCollection.forEach(item => item.id === idTimer)) {
            return console.error("Будильник с таким id уже существует");
        }
        
        this.alarmCollection.push({
            id: idTimer,
            time: time,
            callback: callback
        });   
    }

    removeClock(idTimer) {
        let alarmIdx = this.alarmCollection.findIndex(item => item.id === idTimer);
        
        if(alarmIdx === -1) {
            console.error(`Таймера с таким id = ${idTimer} не существует`);
            return false;
        } else {
            this.alarmCollection.splice(alarmIdx, 1);
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
               this.alarmCollection.forEach(checkClock);
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
        this.alarmCollection.forEach(item => console.log(`будильник номер ${item.id} заведен на  ${item.time}`));
    }

    clearAlarms() {
        clearInterval(this.timerId);
        this.alarmCollection.forEach((item, idx) => this.alarmCollection.splice(idx,1));
    }

}

function testCase (obj) {
    //создаем таймер
    obj = new AlarmClock();
    //добавляем будильники
    obj.addClock(obj.getCurrentFormattedTime(),() => console.log("Пора вставать"), 1);
    obj.addClock(obj.getCurrentFormattedTime(1),() => {console.log("Давай, вставай уже!"); obj.removeClock(2)}, 2);
    obj.addClock(obj.getCurrentFormattedTime(2),() => {console.log("Вставай а то проспишь!");
    obj.clearAlarms();obj.printAlarms()}, 3);


    // obj.addClock(obj.getCurrentFormattedTime(),() => console.log("Вставай, а то проспишь!"), 1);
    // obj.addClock(obj.getCurrentFormattedTime(),() => console.log("Вставай, а то проспишь!"));

    obj.printAlarms();
    obj.start();  
}





