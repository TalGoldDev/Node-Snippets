const dgram = require("dgram");

const server = dgram.createSocket("udp4");
const port = 3500;

server.on("message", (data, rinfo) => {
  console.log(`Msg from client at port: ${rinfo.port}: ${data}`);
  server.send("Hello from server", rinfo.port, "localhost");
});

server.on("listening", function () {
  console.log("Server is listening on port", port);
});

server.on("close", function (err) {
  if (err) {
    console.log("Client disconnected due to error");
  } else {
    console.log("Client disconnected");
  }
  server.close();
});

server.bind(port);
