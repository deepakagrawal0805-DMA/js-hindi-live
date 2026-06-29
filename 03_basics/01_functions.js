
function sayMyName(){
   console.log("D");
console.log("E");
console.log("E");
console.log("P");
console.log("A");
console.log("K"); 
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(2, 5)

// console.log("Result:", result);

function loginUserMessage(username = "kamal"){
    if(!username){
        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("deepak"))
// console.log(loginUserMessage("deepak"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(300, 400, 600, 2000))

const user = {
    username: "deepak",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "kamal",
    price: 499
})

const myNewArray = [200, 500, 100, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 500, 300, 1000]));
