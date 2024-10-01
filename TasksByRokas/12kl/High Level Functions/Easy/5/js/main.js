function paginateItems(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const itemsOnPage = items.slice(startIndex, endIndex);

  return {
    pageNumber,
    pageSize,
    items: itemsOnPage,
  };
}

// Example usage
const allItems = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
];

const pageNumber = 2;
const pageSize = 3;

const currentPage = paginateItems(allItems, pageNumber, pageSize);

console.log("Current Page:");
console.log(currentPage);