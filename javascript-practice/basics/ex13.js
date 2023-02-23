/*
    string primitive type과 String 객체 함수(String.prototype)
*/

// 배열처럼 접근 가능
var str1 = "Hello World";
for(var i = 0; i < str1.length; i++) {
    console.log(str1[i]);
}

// 문자열 합치기
var str2 = "hello";
var str3 = "world";
var str4 = str2 + " " + str3;
console.log("str4 :", str4);

// casting
var str5 = "5" + 5;
console.log("str5 :", str5);

var str6 = "boolean" + true;
console.log("str6 :", str6);

// 객체함수
var str7 = "string1 string2 string3";

var index = str7.indexOf('string2');   // 8
console.log("string2 :", index);

var index = str7.indexOf('string4');   // -1
console.log("string4 :", index);

var str8 = str7.substring(10/*firstindex*/, 13/*lastindex -1*/);
console.log(str8);

var a = str7.split(" ");
console.log(" ", a);

var a = str7.split(":");
console.log(":", a);




