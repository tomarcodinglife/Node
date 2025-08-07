console.log("Sujit Kumar Singh")

function fruit (fruitName) {
    console.log("I like " + fruitName);
}


fruit("Mango");
fruit("Apple");
fruit("Banana");

function addition (num1, num2) {
    console.log("The sum is " + (num1 + num2));
}

addition(5, 10);
addition(20, 30);
addition(100, 200); 

function bulkAdd (...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    } 
    console.log("The total sum is " + sum);
}   

bulkAdd(1, 2, 3, 4, 5);
bulkAdd(10, 20, 30, 40, 50, 60);
bulkAdd(100, 200, 300, 400, 500, 600, 700);

