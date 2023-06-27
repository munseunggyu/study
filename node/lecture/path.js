const { log } = require("console");
const path = require("path");

const string = __dirname;

console.log(path.join(__dirname, "/index.js"));
console.log(path.resolve(__dirname, "..", "/index.js"));
log("path.sep", path.sep);
log("path.delimiter", path.delimiter);
log("path.dirname", path.dirname(string));
