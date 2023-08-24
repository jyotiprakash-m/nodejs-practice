const { fork } = require("child_process");

const child = fork("child.js");

console.log("one");

// send message from
child.send(90);

console.log("two");

child.on("message", (message) => {
  console.log("Message from child: ", message);
});

console.log("three");
