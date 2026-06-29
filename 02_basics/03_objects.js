// singleton
// Objects.create

// objects literals

const mySym = Symbol("key1")


const JsUser = {
    name: "deepak",
    "full name": "Deepak Agrawal",
    [mySym]: "mykey1",
    age: 20,
    location: "Agra",
    email: "deepak2cloud.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "deepak@openai.com"
// Object.freeze(JsUser)
JsUser.email = "deepak@apple.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js users");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js users, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
