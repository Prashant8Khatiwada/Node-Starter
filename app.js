import express from "express";
import bodyParser from "body-parser";
import path from "path";
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";
import __dirname from "./utils/path.js";

const app = express();
app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
console.log("Serving static files from:", path.join(__dirname, "public"));

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res) => {
  res.render("404", { docTitle: "404 - Page Not Found" });
});

app.listen(4000);
