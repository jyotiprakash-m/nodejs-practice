const { PassThrough, pipeline } = require("stream");
const fs = require("fs");

// make sure you have a file.txt file with some text in it!
const input = fs.createReadStream("file.txt");
const out = fs.createWriteStream("out.txt");

const passThrough = new PassThrough();

console.log("Starting pipeline...");
pipeline(input, passThrough, out, (err) => {
  if (err) {
    console.log("Pipeline failed with an error:", err);
  } else {
    console.log("Pipeline ended successfully");
  }
});
