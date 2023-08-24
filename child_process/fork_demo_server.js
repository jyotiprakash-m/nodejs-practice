const express = require("express");

const { fork } = require("child_process");

const app = express();
const longTask = async () => {
  let sum = 0;
  for (var i = 0; i < 10e9; i++) {
    sum += i;
  }
  return sum;
};
app.get("/long", async (req, res) => {
  const message = `Hello from the child process! Request URL: ${req.url}, Method: ${req.method}`;

  const longLongValue = await longTask();
  // Send the response message back to the parent process
  res.send({ response: message, veryLongValue: longLongValue });
});
app.get("/", (req, res) => {
  //Fork a child process o handle the request
  const child = fork("fork_worker.js");

  // Send the request details to the child process
  child.send({
    url: req.url,
    method: req.method,
    data: {
      sender: "Jyoti",
    },
  });

  // Listen for message from the child process
  child.on("message", (message) => {
    // Send the response back to the client
    res.send(message);
  });
});

app.listen(8000, () => {
  console.log("Application is running on port: ", 8000);
});
