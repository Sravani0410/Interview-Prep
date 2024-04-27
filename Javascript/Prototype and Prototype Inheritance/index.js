// Define a constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Add a method to the prototype
  Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  };
  
  // Create a new object using the constructor function
  const person1 = new Person("John", 30);
  const person2 = new Person("Alice", 25);
  
  // Call the method inherited from the prototype
  person1.sayHello(); // Output: Hello, my name is John and I am 30 years old.
  person2.sayHello(); // Output: Hello, my name is Alice and I am 25 years old.
//   In this example:
  
//   We define a constructor function Person to create person objects with name and age properties.
//   We add a method sayHello to the prototype of the Person constructor function.
//   When we create new objects person1 and person2 using the Person constructor, they inherit the sayHello method from the prototype.
//   This demonstrates prototype inheritance, where objects inherit properties and methods from their prototype objects.
  
  