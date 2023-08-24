// Read/Write JSON Files with Node.js

// Option 1

// Reading a file using require
const data = require("./example.json");
console.log(JSON.stringify(data));

// Option 2

// Using fs module
const fs = require("fs");

// fs.readFile
// fs.writeFile
// fs.readFileSync
// fs.writeFileSync

// 1) fs.readFile
fs.readFile("./example.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  // If we do not write the JSON in correct. It will throw the parse error. to avoid this
  try {
    const jsonData = JSON.parse(data);
    console.log(JSON.parse(data));
  } catch (error) {
    console.log(error);
  }
});

// 2) fs.readFileSync

/*
    It will not take the call back function.
    send as a buffer . 
    it internally use <buffer>.toString();

*/

const syncFile = () => {
  console.log("Third example");
  //

  try {
    const data = fs.readFileSync("./example.json");
    console.log("sync", JSON.parse(data));
  } catch (error) {
    console.log(error);
  }
};

syncFile();
