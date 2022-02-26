'use strict';

// Array
// 1. Declaration (선언)
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple','banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); // 배열의 마지막 요소 찾을때 자주 사용

console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for(let i=0; i< fruits.length; i++){
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach 콜백 함수를 받아옴
// 배열의 요소 각각을 정해진 행동을 수행하는 것
// forEach(callbackfn: (value: T, index: number, array: T[])
console.clear();
// fruits.forEach(function (fruit) {console.log(fruit)});
fruits.forEach((fruit) => console.log(fruit));
fruits.forEach((fruit, index) => console.log(fruit, index)); 
fruits.forEach((fruit, index, array) => console.log(fruit, index, array));
console.clear();


// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('graph','peach');
console.log(fruits);
// pop: remove an item to the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging 
fruits.unshift('peach', 'lemon');
console.log(fruits);
// shift: remove an item to the benigging
fruits.shift();
fruits.shift();
console.log(fruits);
// note!! shift, unshift are slower than pop, push

// splice: remove an item by index position 
fruits.push('peach','lemon','graph');
console.log(fruits);
fruits.splice(1, 1, 'a', 'b'); // (시작위치, 갯수, 삽입할 아이템)
console.log(fruits);

// combine two arrays => concat 두 배열 합치기
const fruits2 = ['abb', 'abcc'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
// indexOf < - 배열의 요소가 몇번째에 위치하는지 검색
//         <- 두개의 같은 요소를 검색할 경우 첫번째 요소의 위치를 리턴
// 배열에 없는 요소를 검색하면 -1을 호출시킴
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('a'));
// // includes <- 배열에 요소가 있는지 Boolean으로 나타냄
 console.log(fruits.includes('c'));

// lastIndexOf // <- 두개의 같은 요소를 검색할 경우 마지막 요소의 위치를 리턴
console.clear();

fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));

 console.clear();


 const number = [1,2,3,4,5,6,7];



// Q1. make a string out of an array
 {
   const fruits = ['apple', 'banana', 'orange'];
   const result = fruits.join();
   console.log(result);
 }

// // Q2. make an array out of a string
 {
   console.clear();
   const fruits = '🍎, 🥝, 🍌, 🍒';
   const result = fruits.split(',');
   console.log(result);
 }

// // Q3. make this array look like this: [5, 4, 3, 2, 1]
 {
   console.clear();
   const array = [1, 2, 3, 4, 5];
   const result = array.reverse();
   console.log(result);
 }

// // Q4. make new array without the first two elements
 {
   const array = [1, 2, 3, 4, 5];
   /*const newarr =[];
   for(let i=2; i<array.length;i++){
     newarr.push(array[i]);
   }
   console.log(newarr);
   console.log(array);*/
  
   /* splite와 slice의 차이점
   splite는 배열 자체를 수정하는 것이며, slice는 원하는 배열의 요소를 리턴하는 것*/
   const result = array.slice(2,5);
   console.log(result);
 }

 class Student {
   constructor(name, age, enrolled, score) {
     this.name = name;
     this.age = age;
     this.enrolled = enrolled;
     this.score = score;
   }
 }
 const students = [
   new Student('A', 29, true, 45),
   new Student('B', 28, false, 80),
   new Student('C', 30, true, 90),
   new Student('D', 40, false, 66),
   new Student('E', 18, true, 88),
 ];

// Q5. find a student with the score 90
 {
   const result = students.find((student) => student.score >= 90);
   console.log(result);
 }
 console.clear();
 // Q6. make an array of enrolled students
 {
  const reuslt = students.filter((student) => student.enrolled);
  console.log(reuslt);

   const newarr= [];
   for(let i=0; i<students.length;i++){
     if(students[i].enrolled === true){
       newarr.push(students[i]);
     }
   }
   console.log(newarr);
   
  }

 // Q7. make an array containing only the students' scores
 // result should be: [45, 80, 90, 66, 88]
 {
   const result = students.map((student) => student.score);
   console.log(result);

   const newarr = [];                                         
   for(let i=0;i<students.length;i++){
     newarr.push(students[i].score);
   }
   console.log(newarr);

 }


// Q8. check if there is a student with the score lower than 50
 {
   let TorF;
   for(let i=0;i<students.length;i++){
     TorF = students[i].score;
     if(TorF < 50) {
       TorF = true;
       break;
     }
     else TorF =false;
   }
   console.log(TorF);

   // 배열의 원소중에 조건이 하나라도 만족하는것이 있는지 없는지를 구할때 사용
   const result = students.some((student) => student.score < 50);
   console.log(result);

   // 배열의 원소가 조건을 모두 만족하는지를 구할때 사용 
   const result2 = !students.every((student) => student.score >= 50);
   console.log(result2);
 }
 console.clear();
 // Q9. compute students' average score
 {
   let sum = 0;
   students.forEach((student) => sum += student.score
   )
   console.log(sum / students.length);

   // 배열의 모든 요소를 호출하고 함께 누적된 값을 리턴함
   const result = students.reduce((prev, curr) => prev + curr.score, 0);
   console.log(result / students.length);
 }

 // Q10. make a string containing all the scores
 // result should be: '45, 80, 90, 66, 88'
 {
   const result = students.map((student) => student.score).join();
   console.log(result);
 }

 // Bonus! do Q10 sorted in ascending order
 // result should be: '45, 66, 80, 88, 90'
 {
   const result = students.map((student) => student.score).sort((a,b) => a-b).join();
   console.log(result);
 }