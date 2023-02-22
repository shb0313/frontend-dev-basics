/*
    자바스크립트 객체 2 - function 타입
*/

// 일반함수(실행코드 블록이 있는 함수, 소문자로 시작(관례))
var myFunction = function() {
    console.log("일반함수");
}

// 생성자 함수(대문자로 시작(관례))
var MyObject = function(name, age) {
    this.name = name;
    this.age = age;
}

var o1 = new MyObject("짱구", 7);
var o2 = new MyObject("흰둥", 5);

console.log(o1);
console.log(o2);










