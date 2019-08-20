// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


  // getLength passes the length of the array into the callback.
function getLength(arr, cb) {
  return cb(arr.length());
}

console.log(getLength(items));


  // last passes the last item of the array into the callback.
function last(arr, cb) { 
  for (let i = 0; i< arr.length; i++){
    return cb(arr[i] === arr.length)
  }
}


  // sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  return cb(x + y);
}

console.log(sumNums(2, 4, cb));


  // multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
  return cb(x * y);
}
console.log(miltiplyNums(5, 3));


  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
  items.filter(function(item){
    return item.list;
  })
}

console.log(contains(items))




/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
