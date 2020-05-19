// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested
 * function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() { console.log(internal); };
  nestedFunction();
}
myFunction();

// Explanation:

// 1) Because the nested fuction references "internal" and can't find it within
// its own context so it goes to myFuction to find it.

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a
 * counter to return the summation of that number. For example, `summation(4)`
 * should return 10 because 1+2+3+4 is 10. */

function summation(num) {
  let result = 0;

  for (let counter = 1; counter <= num; counter++) {
    result += counter;
  }

  return result;
}

console.log(summation(7));