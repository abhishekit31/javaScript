const accountId = "121";
let accountEmail = "abhishekit31@gmail.com";
var accountPass = "12345";
accountCity = "New Delhi";

console.table([accountId, accountEmail, accountPass, accountCity]);

/*
Prefer not used var keyword to declare the caribale
because of issue of scope and function scope
*/

// accountId = "1212"; not allowed
accountEmail = "abhishek@gmail.com";
accountPass = "125";
accountCity = "Delhi";

console.table([accountId, accountEmail, accountPass, accountCity]);
