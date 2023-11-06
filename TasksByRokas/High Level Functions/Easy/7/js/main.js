function cartPrice(arr) {
  let cartSum = 0;

  for (let i = 0; i < arr.length; i++) {
    cartSum += cartItems[i].price *= cartItems[i].quantity;
  }

  return cartSum;
}

const cartItems = [
  {
    item: 'Laptop',
    price: 749.99,
    quantity: 1,
  },
  {
    item: 'Gaming mouse',
    price: 74.99,
    quantity: 1,
  },
  {
    item: 'USB Flash drive',
    price: 84.99,
    quantity: 1
  }
]

const price = cartPrice(cartItems);
console.log(price);