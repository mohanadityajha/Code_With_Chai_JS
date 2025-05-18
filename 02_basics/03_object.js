// object literals
const mysym = Symbol("keys1")
const jsUser ={

    name : "Hitesh",
    "fullname" : "Hitesh Choudhary",
    mysym : "myKey1",
    age: 18,
    location : "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    LastLoginDays : ["Monday", "Saturday"]


}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["fullname"])
// console.log(jsUser["mysym"])


jsUser.email = "hitesh@chatgpt.com"
//Object.freeze(jsUser)
jsUser.email = "hitesh@microsoft"
console.log(jsUser)


jsUser.greeting= function(){
    console.log("Hello Js user")
}
jsUser.greetingTwo= function(){
    console.log(`Hello Js user,${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())