const { exec, spawn } = require("child_process");

// exec("find . -type f | wc -l", (err, stdout, stderr) => {
//   if (err) {
//     console.error(`exec error: ${err}`);
//     return;
//   }

//   console.log(`Number of files ${stdout}`);
// });

spawn("find", [".", "-type", "f"], (err, stdout, stderr) => {
  if (err) {
    console.err(`Error is: ${err}`);
  }
  console.log("Output is: ", stdout);
});
