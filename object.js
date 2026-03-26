//singleton
//object literals

// Object.create()

const mysym=Symbol("key1")


const JsUser={
    name:"Ankur",
    "full_name":"Ankur Gupta",
    age:20,
    [mysym]:"mykey1",
    location:"Greater Noida",
    email:"agankur.1881@gmail.com",
    isLoggedIn:true,
    LastLoginDays:["Monday","Tuesday","Wednesday"],

}

// console.log(JsUser.full_name)
// console.log(JsUser["name"])


// console.log(JsUser[mysym])
// console.log(typeof(JsUser[mysym]))

JsUser.email="xyz@gmail.com"
console.log(JsUser)
Object.freeze(JsUser)
JsUser.email="123@gmail.com"
console.log(JsUser)
JsUser.greeting=function(){
    console.log("hello JsUSer")
}
