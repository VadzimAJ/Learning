const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function TextHandler(text) {
  let replace = " ";
  let handler = text.toLowerCase().replace(/ /g, "_") + ".js";
  console.log(handler);
}

rl.question("Введите текст: ", function(text) {
  TextHandler(text);
  rl.close();
});