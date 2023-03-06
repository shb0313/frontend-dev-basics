// ex.1
// unnamed export 모듈에서 대상을 하나 import할 때는 이름을 지정해야 함
import myFunction from './ex07.01.mjs';
import myObject from './ex07.02.mjs';

console.log("ex07.01: " + myFunction(10, 20));
console.log("ex07.02: " + myObject.add(10, 20));
console.log("ex07.02: " + myObject.substract(10, 20));

// ex.2 
// named export는 import 대상이 다수가 될 수 있기 때문에 하나의 특정 이름으로 받을 수 없음
// import m from './07.03.mjs';
// 대신 * as ~를 사용
import * as m from './ex07.03.mjs';

console.log("ex07.03: " + m.add(10, 20));
console.log("ex07.03: " + m.substract(10, 20));

// ex.3
import {substract} from './ex07.04.mjs';

console.log("ex07.04: " + substract(10, 20));

// ex.4
import math, {add} from './ex07.05.mjs';
console.log("ex07.05: " + math.add(10, 20), add(10, 20));
