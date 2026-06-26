const accountId = 135790
let accountName = "deepakagrawal.com"
var accountPassword = "123456"
accountCity = "mathura" 
let accountState;


// accountId = 246810 // not allowed

accountName = "deepakagrawal.in" 
accountPassword = "654321"
accountCity = "agra"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and function scope
*/


console.table([accountId, accountName, accountPassword, accountCity, accountState]);
