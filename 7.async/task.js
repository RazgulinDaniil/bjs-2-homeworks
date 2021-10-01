class AlarmClock {
    constructor() {
        this.alarmcollection = [];
        this.timerId = null;
    }
    addClock(time, callback, idTimer) {
        if(idTimer === undefined) {
            throw new Error("error text");
        } else if(this.alarmcollection.some((item, idx) => item.id === idTimer)) {
            return console.error('Данный ID уже существует');
        }
        
        this.alarmcollection.push({
            id: idTimer,
            time: time,
            callback: callback
        });   
    }

    removeClock(idTimer) {
        let alarmIdx = this.alarmcollection.findIndex((item, idx) => item.id === idTimer);

        if(alarmIdx === -1) {
            console.log(`Таймера с таким id = ${idTimer} не существует`);
        } else {
            this.alarmcollection.splice(alarmIdx, 1);
        }
    }


    getCurrentFormattedTime(uppMinutes = 0) {
        let date = new Date();
        let hours = date.getHours();

        if(hours < 10) {
            hours = '0' + hours;
        }

        let minutes = date.getMinutes + uppMinutes;

        if(minutes < 10) {
            minutes = '0' + minutes;
        }
        return hours + ':' + minutes;
    }

    start() {
        const checkClock = () => {
            this.alarmcollection.some((item,idx) => {
                if(item.time === this.getCurrentFormattedTime()) {
                    return item.time;
                }
            }    
        };
        let date = new Date();
        
    }




}

