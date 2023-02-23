/*
    Function.prototype.call
    Function.prototype.apply
    Function.prototype.bind
*/

var myObject = {
    v: 'me',
    f1: function() {
        console.log(this.v);
    },
    f2: function(param1, param2) {
        console.log(param1 + " " + this.v + " " + (param2 ? param2 : ""));
    }
}

var yourObject = {
    v: 'you'
}

// 일반적인 객체의 함수 호출
myObject.f1();

// apply: 호출되는 함수의 this 파라미터로 전달된 객체로 바꿈
myObject.f1.apply(yourObject);

// call: 호출되는 함수의 this 파라미터로 전달된 객체로 바꿈
//       + 다른 파라미터도 전달 가능
myObject.f2.call(yourObject, "hello");
myObject.f2.call(yourObject, "hello", "again");

// bind: 호출되기 전에 함수의 this를 파라미터로 전달된 객체로 세팅
var f3 = function() {
    console.log("bind:", this.v);
}.bind(myObject);

f3();



