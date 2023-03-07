const express = require("express");
const router = express.Router();

const { ffmpeg } = require("../services/ffmpeg.service");
router.post("/connect", async (req, res) => {
  const { rtmpServer } = req.body;
  try {
    ffmpeg.connect(rtmpServer);
    res.send(`Live streaming started on : ${rtmpServer}`);
  } catch (error) {
    res.send(
      `Failed to send request: CODE: ${error.code}, MESSAGE: ${error.message}`
    );
  }
});

router.post("/ToggleScene", async (req, res) => {
  const { filePath } = req.body;
  try {
    ffmpeg.toggleScene(filePath);
  } catch (error) {
    res.send(
      `Failed to send request: CODE: ${error.code}, MESSAGE: ${error.message}`
    );
  }
});

router.post("/stop", async (req, res) => {
  try {
    ffmpeg.kill();
    res.send("Successfuly stopped server");
  } catch (error) {
    res.send(
        `Failed to send request: CODE: ${error.code}, MESSAGE: ${error.message}`
      );
  }
});

module.exports = router;
