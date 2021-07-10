//  1. Use strict
//  added in ES 5
//  use this for Valina Javascript.
'use strict';

// 2. Variable
// let (added in ES6)
let globalName = 'global name';
{
let name = 'ellie';
console.log(name);

name = 'jihyeok';
console.log(name);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top) <- 어디에 선언했는지 상관없이 제일 위로 끌어올리는 것
// has no block scope

//  3.  Contants
//  favor immutable data type always for a few reasons;
//  - security
//  - thread safety
//  - readuce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

//  4. Variable type
//  primitive, single item: number, string, boolean, null, undefined, symbol
//  object, box, container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 123456789123456789123456789n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const gretting = 'hello ' + brendan;
console.log(`value: ${gretting}, type: ${typeof gretting}`);
const helloBob = `h1 ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean 
// false : 0, null, undefined, NaN, ''
// ture: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}. type: ${typeof test}`);

//  null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// nudefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects 고유한 식별자를 만들때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20};
console.log(ellie.age);
// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // text의 타입이 string에서 number로 바뀌어 있기 때문에 배열의 첫번째 요소를 불러오는데 있어서 에러가 발생함