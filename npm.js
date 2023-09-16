let chalk = require("chalk");
let figlet = require('figlet');

let path = require("path");


console.log(chalk.blue("helllo world!"));
console.log(chalk.bold("hello world"));
console.log(chalk.underline("hello world"));
console.log("\n");
console.log(chalk.bgBlueBright("hello world!"));

for (let i = 1; i < 6; i++) {
    console.log(path.join(figlet.textSync("hacked"),chalk.blue(figlet.textSync(`${i}`))));
    console.log("\n");
}
