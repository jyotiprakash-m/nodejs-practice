const { exec } = require("child_process");

// we can run the shell command using the exec method
/*
 In call back function it takes three arguments err, stdout, stderr

 err - basically if there is any error in the command
 stderr - command execute successfully but if there is any error in the terminal
 stdout - This is basically output after command execution

*/
exec("find /", (error, stdout, stderr) => {
  if (error) {
    console.log("Error:", error);
    return;
  } else if (stderr) {
    console.log("Standard error", stderr);
    return;
  }

  console.log("Output:", stdout);
});
