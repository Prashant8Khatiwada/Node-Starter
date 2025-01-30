const express = require("express");

const router = express.Router();
router.use(express.urlencoded({ extended: false }));

// GET route to display the add-product form
// GET route to display the add-product form
router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

// POST route to handle form submission
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});
module.exports = router;
