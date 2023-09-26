const accountId = 12345
let accountEmail = "shivam@google.com"
var accountPassword = "12345"
accountCity = "Siliguri"
let accountState;

//accountId = 2 // not allowed

accountEmail = "account@gmail.com"
accountPassword = "54321"
accountCity = "kolkata"

console.log(accountId);


/* prefer not to use var
because of issue in the block scope and functional scope
*/


console.table([accountEmail, accountId, accountPassword, accountCity, accountState])

