/*
    자바스크립트 객체 4 - prototype 기반의 상속과 오버라이딩: 자바스크립트 객체지향 프로그래밍
*/

var MyObject = function(name, age) {
    this.name = name;
    this.age = age;
}

MyObject.prototype.school = 'bitacademy';
MyObject.prototype.course = 'Spring & React';
MyObject.prototype.info = function() {
    console.log(this.name + ":" + this.age + ":" + this.school + ":" + this.course);
}

// MyObject 인스턴스 생성 1
var o1 = new MyObject("짱구", 7);
o1.info();

o1.school = 'douzone';
o1.info();

// MyObject 인스턴스 생성 2
var o2 = new MyObject("흰둥", 5);
o2.info = function() {
    console.log("쉿! 몽환의 숲");
}

o2.info();






