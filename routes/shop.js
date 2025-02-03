import path from "path";
import express from "express";
import __dirname from "../utils/path.js";
import { products } from "./admin.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log(products);
  res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
});
export default router;
