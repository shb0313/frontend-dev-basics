/*
    자바스크립트 객체 1 - object타입
    
    1. 자바스크립트 객체는 function 타입과 object 타입이 있음
    2. 보통 function 차입의 객체는 "함수"라고 부름
    3. 따라서 자바스크립트에서 객체라 부르는 것은 object 타입의 객체를 의미
*/

// 생성 방법 1
// 생성자 함수를 사용하는 방법
// 1. Number, Boolean, String, Object, Array 내장 객체
// 2. 사용자 정의 생성자 함수
var o1 = new Object();
o1.name = "짱구";
o1.age = 7;
o1.another = new Object();
o1.another.name = "흰둥";
o1.another.age = 5;

console.log(o1);

// 생성 방법 2
//{} literal 샤용하는 방법
var o2 = {};
o2.name = "짱구";
o2.age = 7;
o2.another = {};
o2.another.name = "흰둥";
o2.another.age = 5;

console.log(o2);

// 생성 방법 3
// (J)ava(S)cript (O)bject (N)otation
var o3 = {
    name: "짱구",
    age: 7,
    another: {
        name: "흰둥",
        age: 5,
    }
}

console.log(o3);

// XmlHttpRequest 객체 사용해서 통신(AJAX)
var response = '{name:"짱구", age:7, email:"jjang@email.com"}';
var userVo = eval("(" + response + ")");
console.log(userVo);


