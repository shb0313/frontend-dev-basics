/*
    자바스크립트 객체 3 - 확장
*/

var o = {
    name: '짱구',
    age: 7
}

var f = function() {
    console.log('Hello World');
}

console.log("=== 확장 ===");

o.another = {
    name: '흰둥',
    age: 5,
    print: function() {
        console.log(this.name + ":" + this.age);
    }
}

console.log(o);
o.another.print();

f.another = {
    name: '흰둥',
    age: 5,
    print: function() {
        console.log(this.name + ":" + this.age);
    }
}

console.log(f);
f.another.print();

console.log("=== 확장: 가본타입(primitive type)은 확장되지 않음 ===");
var i1 = 10;
var i2 = new Number(10);

console.log(i1 + ":" + i2 + ":" + (i1+i2));

i2.another = {
    name: '흰둥',
    age: 5
}

console.log(i2);

i1.another = {};             // 유사객체로 변환, new Number(i1).another = {};
console.log(i1.another);     // 유사객체로 변환, console.log(new Number(i1).another);







