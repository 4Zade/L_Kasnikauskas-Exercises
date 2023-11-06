// # Table of Contents

// - [Live](#live)
// - [Easy](#easy)
// - [Intermediate](#intermediate)
// - [Hard](#hard)

// Live

////////////////////////////////////////////////////////////////////////

// 1 Task.

/**
 * Sorts an array of strings in alphabetical order.
 * @param {string[]} strings - The array of strings to sort.
 * @returns {string[]} - An array of strings sorted in alphabetical order.
 */

////////////////////////////////////////////////////////////////////////

// 2 Task.

/**
 * Generates a random number within a given range.
 * @param {number} min - The minimum value of the range (inclusive).
 * @param {number} max - The maximum value of the range (exclusive).
 * @returns {number} - A random number within the specified range.
 */

////////////////////////////////////////////////////////////////////////

// Easy

// 1 Task.

/**
 * Represents a user with age and location information.
 * @typedef {Object} User
 * @property {string} name - The name of the user.
 * @property {number} age - The age of the user.
 * @property {string} location - The location of the user.
 */

/**
 * Filters a list of users based on age and location criteria.
 * @param {User[]} users - The list of users to filter.
 * @param {number} minAge - The minimum age criteria.
 * @param {number} maxAge - The maximum age criteria.
 * @param {string} locationCriteria - The location criteria to match.
 * @returns {User[]} - An array of filtered users.
 */

////////////////////////////////////////////////////////////////////////

// 2 Task.

/**
 * Represents a product with price and popularity information.
 * @typedef {Object} Product
 * @property {string} name - The name of the product.
 * @property {number} price - The price of the product.
 * @property {number} popularity - The popularity score of the product.
 */

/**
 * Sorts a list of products by price in ascending order.
 * @param {Product[]} products - The list of products to sort.
 * @returns {Product[]} - An array of products sorted by price.
 */

/**
 * Sorts a list of products by popularity in descending order.
 * @param {Product[]} products - The list of products to sort.
 * @returns {Product[]} - An array of products sorted by popularity.
 */

////////////////////////////////////////////////////////////////////////

// 3 Task.

/**
 * Represents a customer with a name.
 * @typedef {Object} Customer
 * @property {string} name - The name of the customer.
 */

/**
 * Transforms a list of customer names into an email list.
 * @param {Customer[]} customers - The list of customers with names.
 * @param {string} domain - The email domain to be appended to customer names.
 * @returns {string[]} - An array of email addresses.
 */

////////////////////////////////////////////////////////////////////////

// 4 Task.

/**
 * Represents an employee with a salary.
 * @typedef {Object} Employee
 * @property {string} name - The name of the employee.
 * @property {number} salary - The salary of the employee.
 */

/**
 * Computes the average salary of employees in a company.
 * @param {Employee[]} employees - The list of employees with salaries.
 * @returns {number} - The average salary.
 */

////////////////////////////////////////////////////////////////////////

// 5 Task.

/**
 * Represents a page of items.
 * @typedef {Object} Page
 * @property {number} pageNumber - The page number.
 * @property {number} pageSize - The number of items per page.
 * @property {Array} items - The items on the page.
 */

/**
 * Paginates a list of items on the client-side.
 * @param {Array} items - The list of items to paginate.
 * @param {number} pageNumber - The current page number (1-based).
 * @param {number} pageSize - The number of items per page.
 * @returns {Page} - An object representing the current page.
 */

////////////////////////////////////////////////////////////////////////

// 6 Task.

/**
 * Filters even numbers from an array.
 * @param {number[]} numbers - The array of numbers to filter.
 * @returns {number[]} - An array containing only the even numbers.
 */

////////////////////////////////////////////////////////////////////////

// 7 Task.

/**
 * Represents an item in the shopping cart.
 * @typedef {Object} CartItem
 * @property {string} name - The name of the item.
 * @property {number} price - The price of the item.
 * @property {number} quantity - The quantity of the item in the cart.
 */

/**
 * Calculates the total price of items in a shopping cart.
 * @param {CartItem[]} cart - The array of items in the shopping cart.
 * @returns {number} - The total price of all items in the cart.
 */

////////////////////////////////////////////////////////////////////////

// 8 Task.

/**
 * Converts a temperature from Celsius to Fahrenheit.
 * @param {number} celsius - The temperature in Celsius.
 * @returns {number} - The temperature in Fahrenheit.
 */


////////////////////////////////////////////////////////////////////////

// 9 Task.

/**
 * Represents a countdown timer.
 * @typedef {Object} Timer
 * @property {number} seconds - The number of seconds remaining on the timer.
 * @property {boolean} isRunning - Indicates if the timer is currently running.
 * @property {function} start - Starts the countdown.
 * @property {function} pause - Pauses the countdown.
 * @property {function} reset - Resets the timer to the initial time.
 * @property {function} onTick - A callback function to be called on each tick.
 */

/**
 * Creates a countdown timer.
 * @param {number} initialSeconds - The initial number of seconds on the timer.
 * @param {function} onTick - A callback function to be called on each tick.
 * @returns {Timer} - A timer object.
 */