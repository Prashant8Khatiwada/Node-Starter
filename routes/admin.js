import express from "express";
import path from "path";
import __dirname from "../utils/path.js";

const router = express.Router();
router.use(express.urlencoded({ extended: false }));
const products = [];
// GET route to display the add-product form
router.get("/add-product", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

// POST route to handle form submission
router.post("/add-product", (req, res) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

export { products };
export default router;
