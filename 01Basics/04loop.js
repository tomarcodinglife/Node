


n = 10

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }   
    console.log(row);
}



console.log("This is a simple loop example to print a right-angled triangle pattern.");

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********

for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));
}
console.log("This is a simple loop example to print a right-angled triangle pattern using repeat method.");

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********


for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <=n-i; j++) {
        row += '*';
    }
    console.log(row)
}

console.log("This is a simple loop example to print a right-angled triangle pattern with spaces.");

// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *







