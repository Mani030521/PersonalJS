
/**
 * Example 2
 */
// will return a value of undefined
var myvar = 'my value';
 
(function() {
  console.log(myvar); // undefined
  let myvar = 'local value';
})();