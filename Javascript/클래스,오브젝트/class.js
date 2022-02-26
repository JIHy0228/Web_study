'use strict';
// object-oriented programing
// class: template 
// object: instance of a class
// Javascirpt: classes
// - introdiced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor (생성자)
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // method
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('ellie',20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
  constructor(fisrtName, lastName, age) {
    this.fisrtName = fisrtName;
    this.lastName = lastName;
    this.age = age;
  } 
  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve','Job',-1);
console.log(user1.age);

// 3. Fields (public, private)
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw = ()=> `drawing ${this.color} color!`;
  
 getaArea = ()=> this.width * this.height;
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw = () => '▲';

  getaArea = () => this.width * this.height * 1/2;
}
const rectangle = new Rectangle(20, 20, 'blue');
const triangle = new Triangle(20,20,'red');

rectangle.draw();
triangle.draw();
console.log(`rectangle : ${rectangle.draw()} area : ${rectangle.getaArea()}`);
console.log(`${triangle.draw()} ${triangle.getaArea()}`);


// 6. Class checking: Instanceof
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);