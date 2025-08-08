

// object methods

let DemoObject = {
    name: "Sujit Tomar",
    age: 30,
    city: "Delhi"
};
DemoObject.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
}

DemoObject.greet(); // Calls the greet method
console.log(`Name: ${DemoObject.name}`); // Accessing properties
console.log(`Age: ${DemoObject.age}`); // Accessing properties
console.log(`City: ${DemoObject.city}`); // Accessing properties
console.log(`Type of DemoObject is ${typeof DemoObject}`); // Should print 'object'
console.log(`Is DemoObject an instance of Object? ${DemoObject instanceof Object}`); // Should print true

// Object keys and values
console.log(`Keys of DemoObject: ${Object.keys(DemoObject)}`);
console.log(`Values of DemoObject: ${Object.values(DemoObject)}`);
// Object entries
console.log(`Entries of DemoObject: ${Object.entries(DemoObject)}`);
// Object destructuring
let { name, age, city } = DemoObject;
console.log(`Destructured Name: ${name}, Age: ${age}, City: ${city}`);
// Object to JSON conversion
console.log(`DemoObject as JSON: ${JSON.stringify(DemoObject)}`);
// Object merging
let anotherObject = { country: "India", profession: "Developer" };
let mergedObject = { ...DemoObject, ...anotherObject };
console.log(`Merged Object: ${JSON.stringify(mergedObject)}`);
// Object property access
console.log(`Accessing property 'name': ${DemoObject.name}`);
// Object property modification
DemoObject.age = 31; // Modifying a property
console.log(`Modified Age: ${DemoObject.age}`);
// Object property deletion
delete DemoObject.city; // Deleting a property
console.log(`Object after deleting 'city': ${JSON.stringify(DemoObject)}`);

// Object iteration
for (let key in DemoObject) {
    console.log(`Key: ${key}, Value: ${DemoObject[key]}`);
}
// Object comparison
let anotherDemoObject = { name: "Sujit Tomar", age: 30, city: "Delhi" };
console.log(`Are DemoObject and anotherDemoObject equal? ${JSON.stringify(DemoObject) === JSON.stringify(anotherDemoObject)}`);
// Object cloning
let clonedObject = { ...DemoObject };   
console.log(`Cloned Object: ${JSON.stringify(clonedObject)}`);
// Object freezing
Object.freeze(DemoObject); // Prevents modification
try {
    DemoObject.age = 32; // This will not work due to freezing  
} catch (error) {
    console.log(`Error: ${error.message}`); // Will throw an error if strict mode is enabled
}
// Object sealing
Object.seal(DemoObject); // Prevents adding new properties
DemoObject.newProperty = "New Value"; // This will not work due to sealing
console.log(`Object after sealing: ${JSON.stringify(DemoObject)}`); // Will not add new property
// Object prototype
console.log(`Prototype of DemoObject: ${Object.getPrototypeOf(DemoObject)}`);   
// Object constructor
console.log(`Constructor of DemoObject: ${DemoObject.constructor.name}`); // Should print 'Object'
// Object type checking
console.log(`Is DemoObject an object? ${typeof DemoObject === 'object'}`);
// Object to string conversion
console.log(`Object as a string: ${DemoObject.toString()}`); // Will print '[object Object]'
// Object comparison with another type
console.log(`Is DemoObject equal to a string? ${DemoObject === "some string"}`); // Should print false
// Object method binding
let boundGreet = DemoObject.greet.bind({ name: "Another Name" });
boundGreet();
// Object method call with different context
DemoObject.greet.call({ name: "Called Context" });  
// Object method apply with arguments
DemoObject.greet.apply({ name: "Applied Context" });
// Object property existence check
console.log(`Does DemoObject have property 'name'? ${'name' in DemoObject}`); // Should print true
// Object property enumeration
console.log(`Property names in DemoObject: ${Object.getOwnPropertyNames(DemoObject)}`);
// Object property descriptors
console.log(`Property descriptor for 'name': ${JSON.stringify(Object.getOwnPropertyDescriptor(DemoObject, 'name'))}`);
// Object prototype chain
console.log(`Prototype chain of DemoObject: ${Object.getPrototypeOf(DemoObject)}`);
// Object instance checking
console.log(`Is DemoObject an instance of Object? ${DemoObject instanceof Object}`); // Should print true
// Object JSON parsing
let jsonString = JSON.stringify(DemoObject);
let parsedObject = JSON.parse(jsonString);
console.log(`Parsed Object from JSON: ${JSON.stringify(parsedObject)}`);
// Object property iteration with forEach
Object.keys(DemoObject).forEach(key => {
    console.log(`Key: ${key}, Value: ${DemoObject[key]}`);
});

// Object property filtering
let filteredObject = Object.fromEntries(
    Object.entries(DemoObject).filter(([key, value]) => typeof value === 'string')  
);
console.log(`Filtered Object (only string values): ${JSON.stringify(filteredObject)}`);
// Object property mapping
let mappedObject = Object.fromEntries(
    Object.entries(DemoObject).map(([key, value]) => [key, `${value} (mapped)`])
);
console.log(`Mapped Object (appended ' (mapped)' to values): ${JSON.stringify(mappedObject)}`);
// Object property renaming
let renamedObject = Object.fromEntries(
    Object.entries(DemoObject).map(([key, value]) => [key === 'name' ? 'fullName' : key, value])
);
console.log(`Renamed Object (renamed 'name' to 'fullName'): ${JSON.stringify(renamedObject)}`);
// Object property existence check with hasOwnProperty
console.log(`Does DemoObject have property 'age'? ${DemoObject.hasOwnProperty('age')}`);
// Object property existence check with in operator
console.log(`Does DemoObject have property 'city'? ${'city' in DemoObject}`); // Should print false after deletion
// Object property existence check with undefined
console.log(`Is 'city' property undefined? ${DemoObject.city === undefined}`);
// Object property existence check with optional chaining
console.log(`Does DemoObject have property 'country'? ${DemoObject.country ? true : false}`); // Should print false

// Object property existence check with nullish coalescing
console.log(`Country property value or default: ${DemoObject.country ?? 'Not specified'}`); // Should print 'Not specified'
// Object property existence check with for...in loop
for (let key in DemoObject) {
    console.log(`Key: ${key}, Value: ${DemoObject[key]}`);
}
// Object property existence check with for...of loop

let keysArray = Object.keys(DemoObject);
for (let key of keysArray) {
    console.log(`Key: ${key}, Value: ${DemoObject[key]}`);
}

// Object property existence check with forEach
keysArray.forEach(key => {
    console.log(`Key: ${key}, Value: ${DemoObject[key]}`);
});
// Object property existence check with map
let mappedKeys = keysArray.map(key => {
    return `Key: ${key}, Value: ${DemoObject[key]}`;
});
console.log(`Mapped Keys: ${mappedKeys}`);
// Object property existence check with filter
let filteredKeys = keysArray.filter(key => typeof DemoObject[key] === 'string');
console.log(`Filtered Keys (only string values): ${filteredKeys}`);