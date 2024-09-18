function sortByPrice(products) {
    return products.slice().sort((a, b) => a.price - b.price);
}

function sortByPopularity(products) {
    return products.slice().sort((a, b) => b.popularity - a.popularity);
}
  
  // Example usage
const products = [
    { name: "Banana", price: 10, popularity: 8 },
    { name: "Kiwi", price: 5, popularity: 10 },
    { name: "Apple", price: 20, popularity: 15 },
];
  
  const byPrice = sortByPrice(products);
  const byPopularity = sortByPopularity(products);
  
  console.log("Products sorted by price:");
  console.log(byPrice);
  
  console.log("Products sorted by popularity:");
  console.log(byPopularity);
  