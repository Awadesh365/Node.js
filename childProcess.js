// openining Differen Things using Node.js
let cp = require("child_process");
console.log("Trying to open firefox -> pepcoding");
cp.execSync("firefox https://www.pepcoding.com");
console.log("Trying to open vs code");
cp.execSync("code");
console.log("Trying to open another file");
let output = cp.execSync("node check.js");
console.log("output "+ output);