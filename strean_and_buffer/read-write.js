const fs = require("fs");

const writeStream = fs.createWriteStream("output.tsx");

writeStream.write("Hello jpm");
writeStream.write("How are you?");

const readStream = fs.createReadStream("example.txt");

// Read event

readStream.on("data", (chunk) => {
  console.log("Chunk received", chunk.toString());
});

readStream.on("end", () => {
  console.log("Data loaded successfully");
});

readStream.on("error", (err) => {
  console.log("Error:: ", err);
});
