const express = require("express");
const router = express.Router();

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/", async (req, res) => {
  try {
    res.sendFile('./public/index.html')
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
