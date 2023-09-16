// path module in node.js, to handle issues in different os, to make application cross-platform

let path = require("path");

// completed, using path module which was incomplte in fileSystem module
// for (let i = 1; i <= 10; i++){
//     let dirPathToMake = `Lecture-${i}`;
//     fs.mkdirSync(dirPathToMake);
// path.join(), will join by its own according to os
//     fs.writeFileSync(paht.join(dirPathToMake,"readme.md"), ` # readme for ${dirPathToMake}`); 
// }

let ext = path.extname(path.join(__dirname, "check.js"));
console.log("ext", ext);
let name = path.basename(__dirname);
console.log(name);
name = path.basename(path.join(__dirname, "check.js"));
console.log(name);
