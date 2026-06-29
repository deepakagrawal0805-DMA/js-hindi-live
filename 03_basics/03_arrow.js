const user = {
    username: "deepak",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        }

}

// user.welcomeMessage()
// user.username = "kamal"
// user.welcomeMessage()

// console.log(this);

// function coffee(){
//     let username = "deepak"
//     console.log(this.username);
// }

// coffee()

// const coffee = function () {
//     let username = "deepak"
//     console.log(this.username);
// }

const coffee =  () => {
    let username = "deepak"
    console.log(this);
}

// coffee()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  ( num1 + num2 )

const addTwo = (num1, num2) => ( {username: "deepak"})


console.log(addTwo(2, 5))

// const myArray = [2, 3, 4, 5, 8]

// myArray.forEach()