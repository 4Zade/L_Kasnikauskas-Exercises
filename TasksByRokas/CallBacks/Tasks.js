/**
 * Calculate the sum of an array of numbers using a callback function.
 *
 * @param {number[]} numbers - An array of numbers to sum.
 * @param {function} callback - A callback function to process the sum.
 * @returns {number} The result of the callback function.
 */
// Hints:
// 1. Initialize Sum Variable: Start by initializing a variable sum to 0. This variable will accumulate the sum of the numbers in the array.
// 2. Loop Through the Array: Use a for loop to iterate through the numbers array. The loop will visit each element of the array.
// 3. Accumulate Sum: Inside the loop, add the current element to the sum variable. This will accumulate the sum of all the numbers in the array.
// 4. Callback Function: After looping through the entire array and calculating the sum, you will return the result of the callback function. The callback function is passed the sum as an argument and should perform some operation on it.
// 5. Example Usage: The example usage demonstrates how to call the sumArray function. It provides an array of numbers and a callback function that multiplies the sum by 2

// --- 

/**
 * Filter an array based on a given condition using a callback function.
 *
 * @param {number[]} array - The array to filter.
 * @param {function} callback - A callback function to filter elements.
 * @returns {number[]} The filtered array.
*/

// Hints:
// 1. Initialize Filtered Array: Start by initializing an empty array filteredArray. This array will hold the elements that meet the specified filtering condition.
// 2. Loop Through the Array: Use a for loop to iterate through the array. The loop will visit each element of the array.
// 3. Apply Callback Function: Inside the loop, apply the callback function to the current element. The callback function should return true if the element meets the filtering condition, and false otherwise.
// 4. Add to Filtered Array: If the callback returns true for the current element, add it to the filteredArray. This step populates filteredArray with the elements that passed the condition.
// 5. Return Filtered Array: After looping through the entire array and filtering the elements, return the filteredArray as the result.
// 6. Example Usage: The example usage demonstrates how to call the filterArray function. It provides an array of numbers and a callback function that filters even numbers.

// ---

/**
 * Find the maximum value in an array using a callback function.
 *
 * @param {number[]} array - The array to search for the maximum value.
 * @param {function} callback - A callback function to compare values.
 * @returns {number} The maximum value.
*/

// Hints:
// 1. Check Array Length: Start by checking the length of the input array. If the array is empty, return undefined as there is no maximum value.
// 2. Initialize Max Value: Initialize a variable max to the first element of the array. This will serve as the initial maximum value.
// 3. Loop Through the Array: Use a for loop to iterate through the array starting from the second element (index 1).
// 4. Apply Callback Function for Comparison: Inside the loop, apply the callback function to compare the current element with the current maximum (max). The callback function should return a value that is used for comparison.
// 5. Return Maximum Value: After looping through the entire array and finding the maximum value based on the callback function, return the max value as the result.

// ---

/**
 * Execute a callback function after a specified delay.
 *
 * @param {function} callback - The callback function to execute.
 * @param {number} delay - The delay in milliseconds.
 */

// --- 

// 1. Timeout with Callback Function: The executeAfterDelay function takes two parameters: callback, which is the function to be executed, and delay, which is the delay in milliseconds. The setTimeout function is used to schedule the execution of the callback function after the specified delay.
// 2. Example Usage: The example usage demonstrates how to call the executeAfterDelay function. It provides an anonymous callback function that logs a message to the console after a 2-second delay.

// ---

/**
 * Apply a callback function to each element of an array and return a new array.
 *
 * @param {any[]} array - The array to map.
 * @param {function} callback - A callback function to transform elements.
 * @returns {any[]} The mapped array.
 */

// Hints:

// 1. Initialize Mapped Array: Start by initializing an empty array mappedArray. This array will hold the transformed values.
// 2. Loop Through the Array: Use a for loop to iterate through the array. The loop will visit each element of the array.
// 3. Apply Callback Function: Inside the loop, apply the callback function to transform the current element. The callback function should return the transformed value.
// 4. Return Mapped Array: After looping through the entire array and transforming the elements, return the mappedArray as the result.
// 5. Example Usage: The example usage demonstrates how to call the mapArray function. It provides an array of names and a callback function that transforms each name into its length.

// ---

// 6.
/**
 * Sort an array using a callback function for comparison.
 *
 * @param {any[]} array - The array to sort.
 * @param {function} callback - A callback function to compare elements.
 * @returns {any[]} The sorted array.
 */
// Hints:
// 1. Nested Loop for Comparison: The sortArray function uses nested for loops to compare and sort elements in the array. The outer loop iterates through the elements, while the inner loop compares elements with others.
// 2. Comparison with Callback Function: Inside the inner loop, elements are compared using the callback function. The callback function should return a positive number if the first element should come after the second element, a negative number if it should come before, and zero if they are considered equal for the sorting logic.
// 3. Swap Elements for Sorting: If the comparison using the callback function indicates that the elements are out of order (i.e., callback(array[i], array[j]) > 0), the elements are swapped to sort them correctly.
// 4. Return Sorted Array: After sorting the entire array using the specified sorting logic provided by the callback function, return the sorted array as the result.
// 5. Example Usage: The example usage demonstrates how to call the sortArray function. It provides an array of fruit names and a callback function that uses localeCompare to sort them alphabetically.

// ---

/**
 * Reduce an array to a single value using a callback function.
 *
 * @param {number[]} array - The array to reduce.
 * @param {function} callback - A callback function to accumulate values.
 * @param {number} initialValue - The initial value for the reduction.
 * @returns {number} The reduced value.
 */

// ---

// Hints:

// 1. Initialize Accumulator: Start by initializing an accumulator variable with the provided initialValue. The accumulator is used to accumulate the result as you iterate through the array.
// 2. Loop Through the Array: Use a for loop to iterate through the array. The loop will visit each element of the array.
// 3. Accumulate Values with Callback: Inside the loop, apply the callback function to accumulate values. The callback function should take the current accumulator value (acc) and the current element (curr) as arguments and return the updated accumulator value.
// 4. Return Reduced Value: After looping through the entire array and accumulating the values, return the final accumulator value as the result.
// 5. Example Usage: The example usage demonstrates how to call the reduceArray function. It provides an array of numbers and a callback function that adds each number to the accumulator.

// ---

/**
 * Find the index of an element in an array using a callback function.
 *
 * @param {any[]} array - The array to search.
 * @param {function} callback - A callback function to compare elements.
 * @returns {number} The index of the first matching element, or -1 if not found.
 */

// Hints:

// 1. Loop Through the Array: Use a for loop to iterate through the array. The loop will visit each element of the array.
// 2. Comparison with Callback: Inside the loop, apply the callback function to compare the current element with the desired element. The callback function should return true if the elements match and false otherwise.
// 3. Return Index or -1: If the callback function returns true for the current element, it means a match is found, and you should return the index. If no match is found after looping through the entire array, return -1 to indicate that the element is not in the array.
// 4. Example Usage: The example usage demonstrates how to call the findIndex function. It provides an array of fruit names and a callback function that searches for the index of "cherry."

// ---

/**
 * Execute a callback function for each element in an array.
 *
 * @param {any[]} array - The array to iterate over.
 * @param {function} callback - A callback function to apply to each element.
 */
// Hints:
// 1. You define a function forEachElement that takes two parameters: an array (array) and a callback function (callback).
// 2. Inside the function, you use a for loop to iterate through the elements of the array. For each element, you call the provided callback function, passing the current element as an argument.
// 3. In the example usage, you create an array named colors with some color strings.
// 4. You call the forEachElement function, passing in the colors array and a callback function. The callback function logs each color to the console using console.log.

// ---

/**
 * Perform a custom operation using a callback function.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {function} callback - A custom callback function to operate on the numbers.
 * @returns {number} The result of the callback operation.
 */
// 1. You define a function customOperation that takes three parameters: two numbers (a and b) and a callback function (callback).
// 2. Inside the function, you simply return the result of invoking the callback function with the two provided numbers (a and b).
// 3. In the example usage, you call customOperation(10, 5, (x, y) => x * y), where the callback function multiplies the two numbers (x and y).
// 4. The result of the operation, which is 50 (10 * 5), is stored in the result variable.