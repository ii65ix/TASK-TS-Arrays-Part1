// Step 1:
// Write a createGroceries function that returns an array with 6 groceries items (each item is a string)
function createGroceries(): string[] {
  // write your code here...

  return ["redbull", "fig", "chips", "cola", "apple", "orange"];
}

// Step 2:
// Write a getSecondGroceryItem function that returns the second grocery item from `groceries` argument
function getSecondGroceryItem(groceries: string[]): string {
  // write your code here...

  return groceries[1]; // replace empty string with what you see is fit
}

// Step 3:
// Write a getGroceriesCount that returns the length of the `groceries` argument
function getGroceriesCount(groceries: string[]): number {
  // write your code here...
  return groceries.length;
}

// Step 4:
// Write a getLastGroceryItem function that returns the last grocery item from `groceries` argument
function getLastGroceryItem(groceries: string[]): string {
  // write your code here...

  return groceries[groceries.length - 1]; // replace empty string with what you see is fit
}

// Step 5:
// Write a removeLastGroceryItem function that removes the last grocery item and return it
function removeLastGroceryItem(groceries: string[]): string {
  // write your code here...
  const removedItem = groceries.pop(); // Remove and get the last item

  if (removedItem === undefined) {
    throw new Error("No items to remove");
  }
  return removedItem;
}

// Step 6:
// Write a addNewGroceries function that adds two new and different grocery items to the end of the groceries argument
// and returns the modified array
function addNewGroceries(
  groceries: string[],
  itemOne: string,
  itemTwo: string
): string[] {
  // write your code here...
  groceries.push(itemOne, itemTwo);
  // Add two new items to the end of the array

  return groceries; // return the modified array
}

// Step 7:
// Write a getFirstThreeGroceryItems function that returns a new array that contains the first three grocery items
function getFirstThreeGroceryItems(groceries: string[]): string[] {
  // write your code here...
  const firstThree = groceries.slice(0, 3);
  return firstThree; // return the first three items
}

export {
  createGroceries,
  getSecondGroceryItem,
  getGroceriesCount,
  getLastGroceryItem,
  removeLastGroceryItem,
  addNewGroceries,
  getFirstThreeGroceryItems,
};
