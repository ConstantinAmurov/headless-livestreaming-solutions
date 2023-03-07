const express = require("express");
const router = express.Router();

const ffmpegRoutes = require("./ffmpeg.route");

router.get("/status", (req, res) => {
  res.json({
    message: "OK",
    timestamp: new Date().toISOString(),
    IP: req.ip,
    URL: req.originalUrl,
  });
});

router.use("/ffmpeg", ffmpegRoutes);

module.exports = router;
