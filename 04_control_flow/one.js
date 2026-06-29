// if
const isUserloggedIn = true
const temperature = 42

// if ( temperature === 40 ) {
//     console.log("less than 50");
// } else {
// console.log("temperature is greater than 50");
// }

// console.log("Execute");

// <, >, <=, >=, ==, !=, ===, !==

// const score = 300

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// // if (balance > 500) console.log("test"),console.log("test2");

// if (balance  < 500) {
//     console.log("less than 500");
// } else if (balance < 780) {
//     console.log("less than 780");
    
// }else if (balance < 900) {
//     console.log("less than 900");
    
// } else {
//     console.log("less than 1200");
    
// }

const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userloggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}