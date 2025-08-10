
let a = 5;
let b = 10;


// Asynchronous function to add two numbers
function addAsync(x, y, callback) {
    setTimeout(() => {
        const result = x + y;
        callback(result);
    }, 1000); // Simulating a delay of 1 second
}

function main() {
    addAsync(a, b, (result) => {
        console.log("Asynchronous Addition Result:", result);
    });
}


main();// Output will be logged after 1 second delay
// Asynchronous Addition Result: 15