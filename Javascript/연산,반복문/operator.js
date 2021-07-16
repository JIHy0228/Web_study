// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`String literals: 1 + 2 = ${1+2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 -1 ); // substaact
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // multiply
console.log(2 ** 2); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter; // counter의 값을 먼저 증가시키고 preIncrement에 증가시킨 값을 할당
//  counter = counter + 1;
//  preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++; // counter의 값을 먼저 postIncrement에 할당시킨 후 counter의 증가 연산을 실행
// postIncrement = counter;
// counter = counter +1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter; // counter의 값을 먼저 감소시키고 preDecrement에 감소시킨 값을 할당
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--; // counter의 값을 먼저 postDecrement에 할당시킨 후 counter의 값을 감소 시킴
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equall

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

//  || (or) , finds the first truthy value 
console.log(`or: ${value1 || value2 || check()}`);

//  && (and), finds the first falsy value

console.log(`or: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something (null 체크를 할 때도 많이 사용)

function check() {
  for (let i = 1; i < 10; i++) {
    //wasting time
    console.log('^^');
  }
  return true;
}

// ! (not) // not 연산자는 현재 값을 반대로 해버리는 것
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion (타입을 신경 x)
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion (타입을 신경 o)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

const ellie1 = { name: 'ellie'};
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1;

console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equallity - puzzler
console.log(0 == false); // t
console.log(0 === false); // f
console.log('' == false); // t
console.log('' === false); // f
console.log(null == undefined); // t
console.log(null === undefined); // f

// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
}
else if (name === 'coder') {
  console.log('You are amazing coder');
}
else {
  console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name == 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;

  case 'Chrome':
    console.log('love you!');
    break;

  case 'Firefox':
    console.log('love you!');
    break;
  
  default:
    console.log('same all!');
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is excuted.

let i = 3;
while(i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is excuted first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for(i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for(let i =3; i > 0; i = i - 2) {
  // inline variable declaraton
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j <10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, contunue
// Q1. iterate from 0 to 10 and print oly even numbwers (use continue)
for (let i = 0; i <= 10; i++) {
  // if(i % 2 === 0) {
  //   console.log(`number: ${i}`);
  // }

  if(i % 2 !== 0) {
    continue;
  }console.log(`number: ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i= 0; i <= 10; i++) {
  // if(i <= 8){
  //   console.log(`number: ${i}`);
  // }

  if(i > 8) {
    break;
  }console.log(`number: ${i}`);
}