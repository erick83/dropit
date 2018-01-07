/*
 * Drop the elements of an array (first argument),
 * starting from the front, until the predicate (second argument) return true.
 * 
 * The second argument, func, is a function you'll use test to test the first
 * elements of the array to decide if you should drop it or not.
 * 
 * Return the rest of the array, otherwise return an empty array.
 */

function dropElements(arr, func) {
  // Drop them elements.
  var cant = arr.length;

  for (var i = 0; i < cant; i++) {
    if (!func(arr[0])) {
      arr.shift();
    } else {
      return arr;
    }
  }
  return arr;
}

dropElements([1, 2, 3], function (n) { return n < 3; });
