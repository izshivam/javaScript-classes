const name = "shivam"
const repoCount = 50

//console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Shivam-ch')


console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));


const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   shivam   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shivam.com/shivam14kumar"

console.log(url.replace('14', '-'))

console.log(url.includes('shivam'))
console.log(url.includes('kumar'))
console.log(url.includes('sunday'))

console.log(gameName.split('-'));


