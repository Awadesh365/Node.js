// fileSystem
// files -> create, read, update, delete
let fs = require("fs");

// read
let buffer = fs.readFileSync("check.js");
// console.log(" bin data " + buffer);

// create
// fs.openSync("my.txt", "w");

// no file -> create and if file eist -> content replace
// fs.writeFileSync("my.txt", "I am not very Happy");

// update
fs.appendFileSync("my.txt", "why are you not very happy");


// folder
// create
// fs.mkdirSync("myDirectory");

// fs.writeFileSync("myDirectory/myFile.txt", "my Content is here");
// let content = fs.readdirSync("myDirectory");
// console.log(content);
// for (let i = 0; i < content.length; i++){
//     console.log("file ", content[i], " is removed");
//     fs.unlinkSync("myDirectory/" + content[i]); // delete
// }
// fs.rmdirSync("myDirectory"); // delete whole folder 

// fs.existsSync() -> if a file eixst at a path
let doesPathExist = fs.existsSync("my.txt");
console.log(doesPathExist);
doesPathExist = fs.existsSync("abc.txt");
console.log(doesPathExist);


// fs.lstatSync -> fs.lstatSync 
// let detailObj = fs.lstatSync(__dirname + "\\fileSystem.js"); // works only on windows, to make it cross platform, you have to require path module.
// let ans = detailObj.isFile();
// console.log(ans);
// ans = detailObj.isDirectory();
// console.log(ans);

let path = require("path");
// now we have used path 
for (let i = 1; i <= 10; i++) {
    let dirPathToMake = `Lecture-${i + 1}`;  // will make From lecture-2 to lecture 11
    fs.mkdirSync(dirPathToMake);
    fs.writeFileSync(path.join(dirPathToMake, "readme.md"), ` #readme for ${dirPathToMake}`);
}
