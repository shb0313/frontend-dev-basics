/*
    Arrow(=>) Function
*/

const power = function(x) {
    return x * x;
}

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(n){
    process.stdout.write(`${n}: ${power(n)}\t`);
});

// ex01-1
console.log("\n ----------------- \n");
console.log("[1-1]");

numbers.forEach(function(n) {
    let result = (function(x) {
        return x * x;
    })(n);
    
    process.stdout.write(`${n}: ${result}\t`);
});

// ex01-2
console.log("\n ----------------- \n");
console.log("[1-2]");

numbers.forEach(function(n) {
        
    let result = ((x) =>{
        return x * x
    })(n);
        
    process.stdout.write(`${n}: ${result}\t`);
});

// ex02-1
console.log("\n ----------------- \n");
console.log("[2-1]");

numbers.forEach(function(n) {
    
    let result = (x => x * x)(n);
    
    process.stdout.write(`${n}: ${result}\t`);
});

// ex02-2
console.log("\n ----------------- \n");
console.log("[2-2]");

numbers.forEach(function(n) {
    process.stdout.write(`${n}: ${(x => x * x)(n)}\t`);
});

// ex02-3
console.log("\n ----------------- \n");
console.log("[2-3]");

numbers.forEach((n) => 
    process.stdout.write(`${n}: ${(x => x * x)(n)}\t`)
);

// ex03
console.log("\n ----------------- \n");
console.log("[3]");

[5, 3, 15, 1045, 43, 92].forEach(e => {
    if(e % 5) {
        process.stdout.write(`${e}: ${(x => x * x)(e)}\t`)
    }
});

// ex4 - this를 어휘적으로 바인딩(Lexical Bind)
console.log("\n ----------------- \n");
console.log("[4]");

const dooly = {
    name: '둘리',
    friends: ['또치', '마이콜', '도우너', '길동'],
    printFriends: function() {
        //console.log(this);
        this.friends.forEach(f => {
            console.log(`${this.name}의 친구 ${f}`)
        });
    }
};

dooly.printFriends();








