console.log(x); // Output: ReferenceError: Cannot access 'x' before initialization
let x = 10;
// In this example, trying to access the variable x before its initialization results in a ReferenceError due to the temporal dead zone. The variable x is in the temporal dead zone until its declaration is reached, and accessing it during this period throws an error. This behavior is specific to variables declared with let and const, highlighting the importance of understanding the temporal dead zone in JavaScript.