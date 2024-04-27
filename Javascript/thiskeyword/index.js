const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  console.log(person.fullName()); // Output: "John Doe"
  
  const printFullName = function() {
    console.log(this.fullName()); // "this" refers to the global object
  };
  
  printFullName(); // Output: TypeError: this.fullName is not a function
  
  const anotherPerson = {
    firstName: "Alice",
    lastName: "Smith",
    fullName: person.fullName
  };
  
  console.log(anotherPerson.fullName()); // Output: "Alice Smith"
//   In this example:
  
//   this within the fullName method refers to the person object when called as person.fullName().
//   When the fullName method is assigned to anotherPerson.fullName, this refers to anotherPerson when called as anotherPerson.fullName().
//   However, when printFullName is called, this refers to the global object (in non-strict mode), leading to a TypeError because the global object does not have a fullName method.