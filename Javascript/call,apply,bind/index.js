const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  function greet(message) {
    console.log(message + ", " + this.fullName());
  }
  
  // Using call
  greet.call(person, "Hello");
  
  // Using apply
  greet.apply(person, ["Hi"]);
  
  // Using bind
  const greetJohn = greet.bind(person);
  greetJohn("Welcome");
//   In this example:
  
//   We have an object person with a fullName method.
//   We have a function greet that takes a message and logs it along with the full name of a person.
//   We use call to invoke greet with the person object as the this context.
//   We use apply to achieve the same result as call, but passing arguments as an array.
//   We use bind to create a new function greetJohn with the person object bound as this, which can be invoked later with a message.