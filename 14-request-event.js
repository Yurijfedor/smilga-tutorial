const http = require("http");

// const server = http.createServer((reg, res) => {
//     res.end('Welkome')
// })

// using eventEmitter API
const server = http.createServer();
// emit request event
// subscribe to it / listen for it / respond to it
server.on("request", (reg, res) => {
  res.end("Welcome");
});

server.listen(5000);
