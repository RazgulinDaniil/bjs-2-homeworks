'use strict';
// задание 1
class PrintEditionItem {
    constructor(name,releaseDate,pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        return this.state = this.state*1.5;
    }
    set state(state) {
        if(state >= 100) {
            state = 100;
        }
        if(state < 0) {
            state = 0;
        }
        this._state = state;
    }
    get state() {
        return this._state;
    }

}
class Magazine extends PrintEditionItem {
    constructor(name,releaseDate,pagesCount) {
        super(name,releaseDate,pagesCount);
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem {
    constructor(author,name,releaseDate,pagesCount) {
        super(name,releaseDate,pagesCount);
        this.type = "book";
        this.author = author;
    }
}
class NovelBook extends Book {
    constructor(author,name,releaseDate,pagesCount) {
        super(author,name,releaseDate,pagesCount);
        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(author,name,releaseDate,pagesCount) {
        super(author,name,releaseDate,pagesCount);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(author,name,releaseDate,pagesCount) {
        super(author,name,releaseDate,pagesCount);
        this.type = "detective";
    }
}
//2 задание
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        let book = null;
        for(let item of this.books) {
            if(item[type] === value) {
                book = item;
            }
        } 
        return book;
    }
    giveBookByName(bookName) {
        let qbook = null;
        for(let book of this.books) {
            if(book.name === bookName) {
                qbook = book;
                let idx = this.books.indexOf(book);
                this.books.splice(idx,1);
            }
        }
        return qbook;
    }
}
const library = new Library("Библиотека имени Ленина");

library.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
library.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
//3 задание
class Student {
    constructor(name,gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.subjects = {};
    }
    //копирую код
    setSubject(subject) {
        this.subjects[subject] = [];
    }

    addMark(mark, subject) {
        if(this.subjects[subject] === undefined) {
            this.subjects[subject] = [];
          } 
        if(mark >= 1 && mark <= 5) {
            this.subjects[subject].push(mark);
        } else {
            console.log("Ошибка, оценка должна быть числом от 1 до 5");
        }
    }

    getAverageBySubject(subject) {
        if(this.subjects[subject] === undefined) {
            return console.log("Несуществующий предмет");
        }
        let subjectAvarge = this.subjects[subject];
        let sum = 0;
        subjectAvarge.forEach(item => sum += item);
        subjectAvarge = sum/subjectAvarge.length;
        console.log(`Средний балл по предмету ${subject} ${subjectAvarge}`);
    }

    getAverage() {
     let marksValue = 0;
     let marksSum = 0;
        for(let key in this.subjects) {
            marksValue += this.subjects[key].length;
            this.subjects[key].forEach(item => marksSum += item);
        }
        console.log(marksSum/marksValue);
    }

    exclude(exclude) {
        delete this.subjects;
        this.exclude = exclude;
    }
}

const student = new Student("Олег Никифоров");
student.addMark(5, "algebra");
student.addMark(5, "algebra");
student.addMark(5, "geometry");
student.addMark(4, "geometry");
student.addMark(6, "geometry"); // "Ошибка, оценка должна быть числом от 1 до 5"
student.getAverageBySubject("geometry"); // Средний балл по предмету geometry 4.5
student.getAverageBySubject("biology"); // Несуществующий предмет
student.getAverage(); // Средний балл по всем предметам 4.75
student.exclude("Исключен за попытку подделать оценки");