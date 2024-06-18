In javascript,"var","let","const" are used as a variable declaration, but they are different from scope,hoisting,reassignment.


**var :**

scope: 'var' is a functional scope.
        variable declared with 'var' is accessible throughtout the function in which it is declared, regradless of block scope.
hoisting: 'var' declarations are hoisted to the top of their containing function or global scope.which means that variable declaration is processed before any code is excuted, but the initialization remain in place.

reassignment and redeclaration:
Variables declared with var can be reassigned and redeclared within the same scope.

**let :**

scope: let is block-scoped. This means that a variable declared with let is only accessible within the block (e.g., within a loop or conditional) in which it is declared.

hoisting: let declarations are hoisted to the top of their block, but they are not initialized until their definition is evaluated. This leads to a "temporal dead zone" from the start of the block until the declaration is encountered.

Reassignment and Redeclaration:
Variables declared with let can be reassigned but cannot be redeclared within the same scope.

**const :**

Scope:const is block-scoped, similar to let.

Hoisting:const declarations are hoisted to the top of their block, but they are not initialized until their definition is evaluated, leading to the same "temporal dead zone" as let.

Reassignment and Redeclaration:Variables declared with const cannot be reassigned or redeclared within the same scope. The value they hold must be assigned at the time of declaration and cannot be changed. However, if the value is an object or array, the contents of the object or array can be modified.


## summary:

var: Function-scoped, hoisted, can be reassigned and redeclared.
let: Block-scoped, hoisted but not initialized (temporal dead zone), can be reassigned but not redeclared.
const: Block-scoped, hoisted but not initialized (temporal dead zone), cannot be reassigned or redeclared.
