
let DemoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

DemoArray.forEach((element, index) => {
    console.log(`Element at index ${index} is ${element}`);
});

DemoArray.forEach((element) => {
    console.log(`Element is ${element}`);
});

// array methods

DemoArray.push(11); // Adds an element at the end
DemoArray.unshift(0); // Adds an element at the beginning
DemoArray.pop(); // Removes the last element
DemoArray.shift(); // Removes the first element
console.log(DemoArray); // Displays the modified array
// Array length
console.log(`Length of the array is ${DemoArray.length}`);
// Array is mutable
DemoArray[0] = 100; // Modifying the first element
console.log(`Modified first element is ${DemoArray[0]}`);
// Array is dynamic
DemoArray.push(12, 13, 14); // Adding multiple elements
console.log(`Array after adding more elements: ${DemoArray}`);
// Array is iterable
for (let element of DemoArray) {
    console.log(`Iterating through element: ${element}`);
}

// Array is an object
console.log(`Type of DemoArray is ${typeof DemoArray}`); // Should print 'object'
// Array is a special type of object
console.log(`Is DemoArray an instance of Array? ${DemoArray instanceof Array}`); // Should print true   
// Array methods
console.log(`Index of 5 in DemoArray: ${DemoArray.indexOf(5)}`); // Finds the index of an element
console.log(`Does DemoArray include 10? ${DemoArray.includes(10)}`); // Checks if an element exists
console.log(`Array after all operations: ${DemoArray}`); // Final state of the array
// Array to string conversion
console.log(`Array as a string: ${DemoArray.toString()}`);
// Array to JSON conversion
console.log(`Array as JSON: ${JSON.stringify(DemoArray)}`);
// Array sorting
DemoArray.sort((a, b) => a - b); // Sorts the array in ascending order
console.log(`Sorted array: ${DemoArray}`);  
// Array reversing
DemoArray.reverse(); // Reverses the array
console.log(`Reversed array: ${DemoArray}`);
// Array slicing
let slicedArray = DemoArray.slice(2, 5); // Slices the array from index 2 to 5
console.log(`Sliced array (from index 2 to 5): ${slicedArray}`);
// Array splicing
let splicedArray = DemoArray.splice(2, 3); // Removes 3 elements starting from index 2
console.log(`Spliced array (removed elements): ${splicedArray}`);
console.log(`Array after splicing: ${DemoArray}`);
// Array concatenation
let anotherArray = [15, 16, 17];
let concatenatedArray = DemoArray.concat(anotherArray); // Concatenates two arrays
console.log(`Concatenated array: ${concatenatedArray}`);
// Array filtering
let filteredArray = DemoArray.filter(element => element > 5); // Filters elements greater than 5
console.log(`Filtered array (elements > 5): ${filteredArray}`);
// Array mapping
let mappedArray = DemoArray.map(element => element * 2); // Maps each element to its double
console.log(`Mapped array (each element * 2): ${mappedArray}`);
// Array reducing
let reducedValue = DemoArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Sums all elements
console.log(`Reduced value (sum of all elements): ${reducedValue}`);
// Array finding
let foundElement = DemoArray.find(element => element > 5); // Finds the first element greater than 5
console.log(`First element greater than 5: ${foundElement}`);
// Array finding index
let foundIndex = DemoArray.findIndex(element => element > 5); // Finds the index of the first element greater than 5
console.log(`Index of first element greater than 5: ${foundIndex}`);
// Array every
let allGreaterThanZero = DemoArray.every(element => element > 0); // Checks if all elements are greater than 0
console.log(`Are all elements greater than 0? ${allGreaterThanZero}`);
// Array some
let someGreaterThanFive = DemoArray.some(element => element > 5); // Checks if some elements are greater than 5
console.log(`Are some elements greater than 5? ${someGreaterThanFive}`);
// Array flat
let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flattenedArray = nestedArray.flat(2);
console.log(`Flattened array: ${flattenedArray}`);
// Array flatMap
let flatMappedArray = nestedArray.flatMap(element => Array.isArray(element) ? element : [element]);
console.log(`Flat mapped array: ${flatMappedArray}`);   
// Array includes
let includesElement = DemoArray.includes(5); // Checks if the array includes the element 5
console.log(`Does DemoArray include 5? ${includesElement}`);
// Array join
let joinedString = DemoArray.join(', ');
console.log(`Joined array as string: ${joinedString}`);
// Array entries
let entries = DemoArray.entries();
for (let [index, value] of entries) {
    console.log(`Entry at index ${index} is ${value}`);
}
// Array keys

