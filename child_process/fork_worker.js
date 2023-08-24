const longTask = async () => {
  let sum = 0;
  for (var i = 0; i < 10e9; i++) {
    sum += i;
  }
  return sum;
};

process.on("message", async (request) => {
  const message = `Hello from the child process! Request URL: ${request.url}, Method: ${request.method}`;

  // Send the response message back to the parent process

  const longLongValue = await longTask();
  process.send({ response: message, veryLongValue: longLongValue });
});
