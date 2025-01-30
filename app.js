const express = require("express");
const app = express();

app.use("/admin", require("./routes/admin"));

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(4000);
