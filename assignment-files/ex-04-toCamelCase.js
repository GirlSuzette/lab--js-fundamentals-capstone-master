/**
 * toCamelCase()
 *
 * Write a `toCamelCase` function that takes a multi word string as an argument
 * and returns a string that follows camel case convention
 *
 */



// ++ YOUR CODE HERE

function toCamelCase(str) {
  str = str.toLowerCase().split(' ');

  for (var i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }

  var strJoin = str.join("");
  var resultStrCame = strJoin[0].toLowerCase() + strJoin.substr(1);

  return resultStrCame;

}





// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.group('ex-04');
console.log('%cFunction: toCamelCase', 'background-color: green; color: white')
console.groupEnd();

/* ----------------------- TEST-1  ----------------------- */
// Expected Outputs:
/* ------------------------------------------------------ */
console.log('TEST-1');

console.assert(toCamelCase("fetch records") === 'fetchRecords')
console.assert(toCamelCase("create table row") === 'createTableRow')
console.assert(toCamelCase("convert to HTML") === 'convertToHtml')
console.assert(toCamelCase("get user account ID") === 'getUserAccountId')


/* ------------------------------------------------------ */
/* ----------------------- END  ----------------------- */
console.log('\n\n');