function calculateTotalPrice(quantity, pricePerItem) {
    // Calculate the number of items the customer needs to pay for
    const payableQuantity = Math.floor(quantity / 3) * 2 + (quantity % 3);

    // Calculate the total price
    const totalPrice = payableQuantity * pricePerItem;

    return totalPrice;
}

// Example usage:
const quantity = 6; // Number of pencils bought
const pricePerPencil = 10; // Price per pencil in your currency

const total = calculateTotalPrice(quantity, pricePerPencil);
console.log(`The total price for ${quantity} pencils is ${total}`);


/*
Explanation:
Calculate the Payable Quantity:

Divide the total quantity by 3 to get the number of groups of 3 items (Math.floor(quantity / 3)).
Each group of 3 items means the customer pays for 2 items (* 2).
Add the remaining items that do not complete a group of 3 (quantity % 3).
Calculate the Total Price:

Multiply the payable quantity by the price per item to get the total price.
Examples:
For 5 pencils (price per pencil is $10):

5 / 3 = 1 group of 3 items. The customer pays for 1 * 2 = 2 items.
The remaining items are 5 % 3 = 2.
Total payable items = 2 (for the group) + 2 (remaining) = 4.
Total price = 4 * $10 = $40.
For 6 pencils (price per pencil is $10):

6 / 3 = 2 groups of 3 items. The customer pays for 2 * 2 = 4 items.
The remaining items are 6 % 3 = 0.
Total payable items = 4.
Total price = 4 * $10 = $40.
This function should help you handle the "buy 2 get 1 free" logic for any given quantity and price per item.

*/