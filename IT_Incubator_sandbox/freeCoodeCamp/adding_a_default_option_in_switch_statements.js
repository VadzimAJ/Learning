//Adding a Default Option in Switch Statements
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/adding-a-default-option-in-switch-statements

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      return "apple";
      break;
    case "b":
      return "bird";
      break;
    case "c":
      return "cat";
      break;
    default: 
      return "stuff";
      break;
  }


  // Only change code above this line
  return answer;
}

switchOfStuff(1);