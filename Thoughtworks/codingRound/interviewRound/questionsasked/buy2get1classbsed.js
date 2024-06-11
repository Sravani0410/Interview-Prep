class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item, quantity, pricePerItem) {
        this.items.push({ item, quantity, pricePerItem });
    }

    calculateTotalPrice() {
        let totalPrice = 0;
        this.items.forEach(({ quantity, pricePerItem }) => {
            const payableQuantity = Math.floor(quantity / 3) * 2 + (quantity % 3);
            totalPrice += payableQuantity * pricePerItem;
        });
        return totalPrice;
    }

    printCart() {
        this.items.forEach(({ item, quantity, pricePerItem }) => {
            console.log(`${quantity} ${item}(s) at $${pricePerItem} each`);
        });
    }
}

// Example usage:
const cart = new ShoppingCart();
cart.addItem('pencil', 5, 10); // 5 pencils at $10 each
cart.addItem('notebook', 6, 20); // 6 notebooks at $20 each

cart.printCart();

const total = cart.calculateTotalPrice();
console.log(`The total price for the items in the cart is $${total}`);

/*

Explanation:
ShoppingCart Class:

The class has a constructor that initializes an empty array to hold the items.
The addItem method allows adding items to the cart with a specified quantity and price per item.
The calculateTotalPrice method calculates the total price based on the "buy 2 get 1 free" logic for each item in the cart.
The printCart method prints the contents of the cart.
Adding Items to the Cart:

Use addItem to add items to the cart, specifying the item name, quantity, and price per item.
Calculating the Total Price:

The calculateTotalPrice method iterates over the items in the cart, applies the "buy 2 get 1 free" logic to each item, and sums up the total price.
Example Usage:

Add 5 pencils at $10 each and 6 notebooks at $20 each to the cart.
Print the cart's contents.
Calculate and print the total price.
This class component approach encapsulates the logic within a class, making it reusable and easy to manage.

 */