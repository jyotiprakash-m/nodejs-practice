const { execFile } = require("child_process");
// const { stdout } = require("process");

// It take the file path. and a callback function,which again take three parameters as exec.
/*
    We have to give execute permission to that file (shell_command.sh) by
    chmod +x shell_command.sh
*/

execFile("./shell_command.sh", (error, stdout, stderr) => {
  if (error) {
    console.log("Error:", error);
    return;
  } else if (stderr) {
    console.log("Standard error", stderr);
    return;
  }

  console.log("Output:", stdout);
});
