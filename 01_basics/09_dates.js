let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

//let myCreatedDate = new Date(2563, 0, 25)
//console.log(myCreatedDate);
//let myCreatedDate = new Date(2893, 0, 32)
// let myCreatedDate = new Date(2893, 0, 32, 5, 3)
// console.log(myCreatedDate.toDateString());
//let myCreatedDate = new Date(2893, 0, 32, 5, 3)
let myCreatedDate = new Date("2023-09-28")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString(`default`, {
  weekday: "long",

})



