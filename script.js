// // 1. Type Conversion
// const inputNumber = "7500";
// console.log(inputNumber + 10);

// console.log(inputNumber);
// console.log(Number(inputNumber), inputNumber);
// console.log(typeof inputNumber);

// const birthYear = 1988;
// console.log(String (birthYear));

// const firstName = "Faiza";
// console.log(Number(firstName));

// const inputNumber = "7500";
// const firstName = "Faiza";
// console.log(Boolean(inputNumber));
// console.log(Boolean(firstName));

// -------------------------------------------------

// // 2. JavaScript Type Coerction
// let bookNumber = 5;
// console.log("I have " + bookNumber + " Story book!");
// console.log("20" - 5);
// console.log("20" + 5);
// console.log("20" * 5);
// console.log("20" / 5);
// console.log("20" - "5");

// console.log(5 + 10 + 5 + "5");
// console.log("100" - "50" + 10)
// console.log("15" - "5" - "4" - "3" + 5);
// console.log("15" - "5" - "4" - "3" + "5");

// -------------------------------------------------

// // 3. JavaScript Truthy & Falsy Value

// // Falsy Value (Total 5 falsy Value)
// // 0 (Zero)
// // "" (Empty String)
// // null
// // undefined
// // NaN

// console.log(0);
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

// console.log(Boolean(1));
// console.log(Boolean("Faiza"));
// console.log(Boolean("125"));


// const job = 0;
// if (job) {
//     console.log("I have a Good Job!");
// } else {
//     console.log("Looking for a Good Job!");
// }

// let salary;
// if (salary) {
//     console.log("My salary is set");
// } else {
//     console.log("my salary isn't set");
// }

// -------------------------------------------------

// 4. Conditional Statements

// let earning = 15000;
// if (earning > 35000) {
//     console.log("His earning is good!");
// } else if(earning > 20000) {
//     console.log("His earning isn't bad");
// } else if(earning > 10000) {
//     console.log("Write Something")
// } else {
//     console.log("His earning isn't good enough!");
// }

// let today = "Saturday";
// if (today === "Saturday") {
//     console.log("Today 9 pm we have a main live class!");
// } else if (today === "Sunday") {
//     console.log("Today 9 pm we have a support live class!");
// } else if (today === "Monday") {
//     console.log("Today 9 pm we have a main live class!");
// } else if (today === "Tuesday") {
//     console.log("Today 9 pm we have a support live class!");
// } else if (today === "Wednesday") {
//     console.log("Today 9 pm we have a main live class!");
// } else if (today === "Thursday") {
//     console.log("Today 9 pm we have a support live class!");
// } else {
//     console.log("Today is our holiday!");
// }

// -------------------------------------------------

// // 5. Nested Conditional Statements

// const x = 10;
// if (x >= 10) {
//     if (x == 10) {
//         console.log("X is equals to 10!");
//     } else {
//         console.log("X is greater than10");
//     }
// } else {
//     console.log("X is lower than 10!");
// }

// -------------------------------------------------

// 6. Switch Statement

let day = "Saturday";
switch (day) {
    case "Saturday":
        console.log("Today 9 pm we have a main live class!");
        break;
    case "Sunday":
        console.log("Today 9 pm we have a support live class!");
        break;
    case "Monday":
        console.log("Today 9 pm we have a main live class!");
        break;
    case "Tuesday":
        console.log("Today 9 pm we have a support live class!");
        break;
    case "Wednesday":
        console.log("Today 9 pm we have a main live class!");
        break;
    case "Thursday":
        console.log("Today 9 pm we have a support live class!");
        break;
    default:
        console.log("Today is our holiday!");   
}