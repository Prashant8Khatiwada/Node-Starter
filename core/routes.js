const fs = require("fs");

const routes = (req, res) => {
  const { url, method } = req;
  if (req.url === "/") {
    try {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>Enter Message</title></head>");
      res.write(
        "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
      );
      res.write("</html>");
      return res.end();
    } catch (error) {
      console.error("Error handling root route:", error);
      res.statusCode = 500;
      return res.end("Internal Server Error");
    }
  }
  if (req.url === "/message" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      try {
        body.push(chunk);
      } catch (error) {
        console.error("Error processing chunk:", error);
        res.statusCode = 500;
        return res.end("Internal Server Error");
      }
    });
    return req.on("end", () => {
      try {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split("=")[1];
        fs.writeFile("core/message.txt", message, (err) => {
          if (err) {
            console.error("Error writing to file:", err);
            res.statusCode = 500;
            return res.end("Internal Server Error");
          }
          res.statusCode = 302;
          res.setHeader("Location", "/");
          return res.end();
        });
      } catch (error) {
        console.error("Error processing request:", error);
        res.statusCode = 500;
        return res.end("Internal Server Error");
      }
    });
  }
  try {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
    res.write("</html>");
    res.end();
  } catch (error) {
    console.error("Error serving default page:", error);
    res.statusCode = 500;
    return res.end("Internal Server Error");
  }
};

module.exports = routes;
