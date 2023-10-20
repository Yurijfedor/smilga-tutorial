const EventEmmitter = require("events");

const customEmmitter = new EventEmmitter();
customEmmitter.on("response", (name, id) => {
  console.log(`data recived ${name} with id: ${id}`);
});

customEmmitter.on("response", () => {
  console.log(`some other logic here`);
});
customEmmitter.emit("response", "jhon", 34);
