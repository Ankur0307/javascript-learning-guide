// let myDate=new Date()
//console.log(myDate.toString())
// console.log(myDate.toDateString())
//console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toISOString())

// console.log(typeof myDate)
let newDate=new Date();

console.log(newDate.toLocaleString('default',{
    weekday:"long",
    timeZone:'Asia/Kolkata'
    
}))

