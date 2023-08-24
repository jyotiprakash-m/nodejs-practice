const { spawn } = require("child_process");

/*
    it return a stream output instead of buffer so that we can run the long commands like
    "find /"
    
    it take two arguments first one is main command and second one is a array where we can give different 
    options.

    from the child process, we can call different events as below

*/

// const child = spawn("ls", ["-la"]);

// const child = spawn("find", ["/"]);

//

const child = spawn("python3", ["grey-scale.py"]);

child.stdout.on("data", (data) => {
  console.log("Output", data.toString());
});

child.stderr.on("data", (data) => {
  console.log("Std Error: ", data.toString());
});

child.on("error", (error) => {
  console.log("Error: ", error.toString());
});

/*
This exit event is run when child process is terminate. it take two arguments one is code and another is 
signal
*/
child.on("exit", (code, signal) => {
  if (code) {
    console.log(`Child process exited with code ${code}`);
  }
  if (signal) {
    console.log(`Child process was terminated by signal ${signal}`);
  }
});
