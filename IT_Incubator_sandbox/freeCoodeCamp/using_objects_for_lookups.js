//Using Objects for Lookups
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/using-objects-for-lookups
// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const lookup = {
   "alpha": "Adams",
   "bravo": "Boston",
   "charlie": "Chicago",
   "delta": "Denver",
   "echo": "Easy",
   "foxtrot": "Frank"
  }
 result = lookup[val];
 
console.log("```" + result +"```");
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");