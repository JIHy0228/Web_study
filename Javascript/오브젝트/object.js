// Object
// one of the JavaScript's data types.
// a collection of related data and/or function
// Nearly all objects in JavaScript are instances of Object
// object = {key : value}; object는 프로퍼티와 그에 해당하는 값으로 존재

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const jihyeok = {name : 'jihyeok', age : 4};
print(jihyeok);

jihyeok.hasJob = true;
console.log(jihyeok.hasjob);

delete jihyeok.hasjob;
console.log(jihyeok.hasjob);

// 2. Computed properties 배열처럼 사용가능
console.log(jihyeok.name);
console.log(jihyeok['name']); // 키는 스트링 타입으로 받아와야함

// . 코딩하는 순간 키에 해당하는 값을 받아 오고싶을떄
// [''] 정확하게 어떤 키가 필요하지 모를 떄 즉, 런타임에서 결정될 때

jihyeok['hasJob'] = true;
console.log(jihyeok.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}

printValue(jihyeok, 'name');

// 3. Property value shorthand

const person1 = {name : 'bob', age : 2};
const person2 = {name : 'steve', age : 3};
const person3 = {name : 'dave', age : 4};
const person4 = new Person('jihyeok', 26);
console.log(person4);

//  4. Constructor Function
function Person(name, age) {
    
    // this = {};
        this.name = name;
        this.age = age;
        // return this;
}

// 5. In operator: property existence check (key in obj)
// in 이라는 키워드를 이용해서 해당하는 키가 오브젝트에 있는지 확인
console.log('name' in jihyeok);
console.log('age' in jihyeok);
console.log('random' in jihyeok);
console.log(jihyeok.random); // 없는 키이기떄문에 undefined

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in jihyeok) { 
    console.log(key);
}
// for (value of iterable)

const array = [1,2,3,4,5];

/*for (let i = 0; i< array.length; i++){
    console.log(array[i]);
}*/
for (value of array) {
    console.log(value);
}

// 7. Fun Cloning
// Object.assign(dest, [obj1, obj2, obj3 ...])

const user = { name: 'jihyeok', age: '20'};
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
    // user3에 user의 key를 가져와서 value 를 할당시킴
}
console.clear();
console.log(user3);

// 다른방법 Object.assign
/*
const user4 = {};
Object.assign(user4, user);*/

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size : 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
// 뒤에 나오는 친구가 앞에 동일한 프로퍼티가 있을경우 값이 덮어써짐
console.log(mixed.color);
console.log(mixed.size);