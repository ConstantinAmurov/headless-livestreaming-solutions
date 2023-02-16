const express = require("express");
const router = express.Router();

const obsRoutes = require("./obs.route");

router.get("/status", (req, res) => {
  res.json({
    message: "OK",
    timestamp: new Date().toISOString(),
    IP: req.ip,
    URL: req.originalUrl,
  });
});

router.use("/obs", obsRoutes);

module.exports = router;
