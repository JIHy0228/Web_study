"use strict";

// JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration (선언이 제일 위로 올라가는 것 => hoisting이 된 직후 부터 코드가 나타나는 순서대로 실행 되는것)
// synchronous : 코드가 정해진 순서에 맞게 실행되는 것  // asynchronous: 정해진 순서가 아닌 언제 실행될지 예측할 수 없는 것
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

// Asynchronous callback

function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// Callback Hell example

class UserStorag {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

// 1. id, pw를 입력으로 받아옴
// 2. 로그인 -> 성공 -> id를 받아옴
// 3. 받아온 id를 역할 요청
// 4. 역할을 성공적으로 받으면 이름과 역할을 출력

const userStorag = new UserStorag();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorag.loginUser(
  id,
  password,
  (user) => {
    userStorag.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
