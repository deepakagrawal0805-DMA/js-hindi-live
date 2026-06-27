// # Primitive

// 7 types : string, number, bigint, boolean, undefined, symbol, null


const score = 100
const scoreValue = 100.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 34567890123456789012345678901234567890n


// Reference(None primitive)

// Array, Object, Function

const heros = ['shaktiman', 'hatimtai', 'sonpari']
let myObj = {
    name: "deepak",
    age: 23,

}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof anotherId);




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

// Stack (Primitive), Heap (Non-Primitive)

let myNickName = "deepu"
let anotherName = myNickName
anotherName = "devdatta"

console.log(myNickName);
console.log(anotherName);

let userOne = {
    email: "deepak@example.com"
    
}

let userTwo = userOne

userTwo.email = "devdatta@example.com"

console.log(userOne.email);
console.log(userTwo.email);