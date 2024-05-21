const arr1 = [1, 2, 3];
// without destructuring
arr1[0], arr1[1], arr1[2];
// with destructuring
const [one, two, three] = arr1;
console.log(one)

// # add an element to the end of an array
let fruits = ['apple', 'banana', 'cherry'];
// # write code here
fruits.push('blueberry');
console.log(`fruits: ${fruits}`);

// # remove the first element from an array
// # write code here
fruits.shift()
console.log(`fruits: ${fruits}`);

// # add an element to the beginning of an array
// # write code here
fruits.unshift('plums')
console.log(`fruits: ${fruits}`);

// # remove the last element from an array
// # write code here
fruits.pop()
console.log(`fruits: ${fruits}`);

// # remove the first two elements from an array using splice
// # write code here
fruits.splice(0, 2)
console.log(`fruits: ${fruits}`);

// # insert 3 elements at the beginning of the array using splice
// # write code here
fruits.splice()
console.log(`fruits: ${fruits}`);