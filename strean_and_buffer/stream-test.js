const fs = require("fs");
const http = require("http");

// Create a server
const server = http.createServer();
server.on("request", (req, res) => {
  // Send the file in stream format

  const streamData = fs.createReadStream("example.txt");

  // it has different events like data , end , error and finished

  //This event is fired when data is available to read
  streamData.on("data", (data) => {
    res.write(data);
  });
  // This event is fired when there is no more data to read
  streamData.on("end", () => {
    res.end();
  });

  // this error is fired where there is any error receiving or writing data
  streamData.on("error", (err) => {
    console.log(err);
    res.end("Something went wrong: ", err);
  });

  streamData.pipe(res);

  // Old approach where we first download the file and write the data.

  //   fs.readFile("example.txt", (err, data) => {
  //     if (err) console.log("Error occurred", err);
  //     res.end(data);
  //   });
});

//Listen to the server
server.listen(8000, "localhost", () => {
  console.log("Server listen at localhost:8000");
});
