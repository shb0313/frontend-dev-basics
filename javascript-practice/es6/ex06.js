/*
    구조 분해(Destrunting)
*/

// ex1 = basic
console.log("[ex1]");

const user = {
    firstName: '둘',
    lastName: '리',
    email: 'dooly@email.com'
};

// let firstName = user.firstName;
// let lastName = user.lastName;
// let email = user.email;
const {firstName, lastName, email} = user;

console.log(firstName, lastName, email);

// ex2 = Default Value
console.log("[ex2]");

const goods = {
    name: 'TV',
    price: 10000, 
    stockCount: 10
};

const {name, price, stockCount=0, soldCount=0} = goods;
console.log(name, price, stockCount, soldCount);

// ex3 = 구조 분해해야 할 객체의 속성 이름과 변수 이름이 다를 때
console.log("[ex3]");

const person = {
    name: '마이콜',
    country: 'korea'
};

const {n: fullName, c: country} = person;
console.log(fullName, country);

// ex4 = 내부 객체(Nested Object)의 구조 분해
console.log("[ex4]");

const student = {
    name: '둘리', 
    age: 10,
    score: {
        math: 30,
        korean: 100,
        science: 90
    }
};

const {
    name: studentName, 
    score: {
        math=0,
        korean=0,
        science=0,
        music=0
    }
} = student;

console.log(`${studentName}의 성적
국어: ${korean}
수학: ${math}
과학: ${science}
음악: ${music}
`);

// ex5 - 함수 파라미터
console.log("[ex5]");

const averageScore = function({
    name: studentName, 
    score: {
        math=0,
        korean=0,
        science=0,
    }
}) {
    console.log(`${studentName}의 평균은 ${(math + korean + science)/3} 입니다.`);
};

averageScore(student);

// ex6 - 배열의 구조 분해(기본)
console.log("[ex6]");

const color = [155, 200, 87];
let [red, green, blue] = color;
console.log(red, green, blue);

// ex7 - 배열의 구조 분해(디폴트 값) 
console.log("[ex7]");

[red=0, green=0, blue=0, alpha=0] = color;
console.log(red, green, blue, alpha);

// ex8 - 배열의 구조 분해(skip value) 
console.log("[ex8]");

const [ , , colorOfBlue=0] = color;
console.log(colorOfBlue);

// ex9 - 배열의 구조 분해(swap values) 
console.log("[ex9]");

let x = 20;
let y = 10;
console.log(x, y);

let temp = x;
x = y;
y = temp;
console.log(x, y);

[x, y] = [y, x]
console.log(x, y);

// ex10 - 배열의 구조 분해(... array spread operator) 
console.log("[ex10]");

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [firstColor, secondColor, ...otherColors] = rainbow;
console.log(firstColor, secondColor, otherColors);

console.log("Colors of Raindow:", rainbow);
console.log("Colors of Raindow:", ...rainbow);

// "red orange yellow"
var f = function(...colors) {
    return colors.join(' ');
};

console.log(f('red', 'orange', 'yellow'));

// ex11 - 배열의 구조 분해(... array spread operator 함수의 파라미터로 사용하기) 
console.log("[ex11]");

const s = ((...colors) => colors.join(' '))('red', 'orange', 'yellow');

console.log(s);



