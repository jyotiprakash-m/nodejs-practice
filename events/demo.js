const EventEmitter = require("events");

const myEmitter = new EventEmitter();
myEmitter.on("event", () => {
  console.log("an event occurred!");
});
myEmitter.on("event", (a, b) => {
  console.log("an event occurred!", a, b);
});
myEmitter.emit("event", 45, 450);
