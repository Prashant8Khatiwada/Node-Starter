import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const router = express.Router();
router.use(express.urlencoded({ extended: false }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// GET route to display the add-product form
router.get("/add-product", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

// POST route to handle form submission
router.post("/add-product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

export default router;
