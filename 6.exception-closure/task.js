//1 задача
function parseCount(arg) {
    if(isNaN(parseInt(arg, 10))) {
        throw new Error(`Невалидное значение`);
    } 
    return parseInt(arg, 10);
}

function validateCount(arg) {
    try {
        parseCount(arg);
        return parseInt(arg);
    } catch(e) {
        return e;
    }
}

//2 задача
class Triangle {
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if(a + b < c || a + c < b || b + c < a) {
            throw new Error ("Такого треугольника не существует");
        }
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea(){ 
        let p = (this.a + this.b + this.c)/2;
        let area = Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c));
        return Number(area.toFixed(3));

    }
}

function getTriangle(a,b,c) {
    try {
         return new Triangle(a,b,c);
    } catch(e) {
        return {
            getPerimeter() {
                return "Ошибка! Треугольник не существует";
            },
            getArea() {
                return "Ошибка! Треугольник не существует";
            } 
        };
    }
} 

