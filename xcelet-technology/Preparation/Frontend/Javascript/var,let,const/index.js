// var:
function example() {
    console.log(a); // undefined (due to hoisting)
    var a = 10;
    console.log(a); // 10
    if (true) {
      var a = 20; // same `a` as above
      console.log(a); // 20
    }
    console.log(a); // 20
}
  example();

// let:

function example1() {
    console.log(a); // ReferenceError: Cannot access 'a' before initialization
    let a = 10;
    console.log(a); // 10
    if (true) {
      let a = 20; // different `a` from above
      console.log(a); // 20
    }
    console.log(a); // 10
  }
  example1();
  
//   const :
function example2() {
    const a = 10;
    console.log(a); // 10
    // a = 20; // TypeError: Assignment to constant variable.
    if (true) {
      const a = 20; // different `a` from above
      console.log(a); // 20
    }
    console.log(a); // 10
    
    const obj = { name: "John" };
    obj.name = "Doe"; // Allowed
    console.log(obj.name); // Doe
    
    // obj = {}; // TypeError: Assignment to constant variable.
  }
  example2();
  
  