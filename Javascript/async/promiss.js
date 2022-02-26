"use strict";

//  Promiss is a JavaScript object for asynchronous operation.
//  2 point
//  1. State : pending -> fulfilled or rejected
// 프로미스가 만들어져서 지정한 오퍼레이션이 수행중일떄 pending 상태
// 성공적으로 끝날때 fullfilled 상태 아닐때는 rejected 상태
//  2. Producer(제공자) vs Consumer(사용자)

// 1. Producer
//  when new Promise is created, the executor runs automatically.
//  새로운 프로미스가 만들어질떄 executor라는 함수가 바로 실행됨을 주의
//  ex) 원하지 않는 네트워크 통신을 수행할 수 있음
const promiss = new Promise((resolve, reject) => {
  // doing some heavy work (newtwork, read files)
  console.log("doing something...");
  setTimeout(() => {
    //resolve("ellie"); // 성공적으로 수행될때 resolve라는 콜백함수를 통해 전달
    reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then, catch, finally를 이용해 값을 받아올 수 있음
promiss
  .then((value) => {
    // promise가 정상적으로 잘 수행되서 resolve 콜백함수에서 전달된 value를 받음
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
