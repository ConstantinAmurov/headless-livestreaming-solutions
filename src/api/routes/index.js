const express = require("express");
const router = express.Router();

const vMixRoute = require("./vmix.route");

router.get("/status", (req, res) => {
  res.json({
    message: "OK",
    timestamp: new Date().toISOString(),
    IP: req.ip,
    URL: req.originalUrl,
  });
});

router.use("/vmix", vMixRoute);

module.exports = router;
