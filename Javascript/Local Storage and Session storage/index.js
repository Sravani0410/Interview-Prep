// Storing data in Local Storage
localStorage.setItem('username', 'John');
localStorage.setItem('theme', 'dark');

// Retrieving data from Local Storage
const username = localStorage.getItem('username');
const theme = localStorage.getItem('theme');

console.log('Username:', username); // Output: Username: John
console.log('Theme:', theme); // Output: Theme: dark

// Storing data in Session Storage
sessionStorage.setItem('cart', JSON.stringify(['item1', 'item2', 'item3']));

// Retrieving data from Session Storage
const cartItems = JSON.parse(sessionStorage.getItem('cart'));

console.log('Cart Items:', cartItems); // Output: Cart Items: ['item1', 'item2', 'item3']
// In this example:

// We use setItem to store key-value pairs in both Local Storage and Session Storage.
// We use getItem to retrieve data from both storage mechanisms.
// Local Storage is suitable for storing persistent data like user preferences or settings.
// Session Storage is useful for storing temporary data like a shopping cart during a single browsing session.