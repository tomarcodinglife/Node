
let addition = (...numbers) => {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    console.log("The total sum is " + sum);
}

addition(1, 2, 3, 4, 5);
addition(10, 20, 30, 40, 50, 60);
addition(100, 200, 300, 400, 500, 600, 700);    