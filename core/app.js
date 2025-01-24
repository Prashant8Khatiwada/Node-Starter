const http = require("http");
const fs = require("fs");
const routes = require("./routes");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  return routes(req, res);
});

server.listen(5000, () => {
  console.log("Server listening on port : 5000....");
});
