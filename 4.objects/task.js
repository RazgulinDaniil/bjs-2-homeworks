function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

let student1 = new Student("Oleg", "male", 12);
let student2 = new Student("Masha", "female", 11);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined) {
    this.marks = [];
  } 
  this.marks.push(mark);
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks === undefined) {
    this.marks = marks;
  } else {
    this.marks = this.marks.concat(marks);
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  this.marks.forEach(item => sum += item);
  return sum/this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
