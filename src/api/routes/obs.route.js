const express = require("express");
const router = express.Router();

const { obs, connect } = require("../services/obs.service");
router.post("/connect", async (req, res) => {
  const data = req.body;

  const response = await connect(data);

  res.send(response);
});

router.get("/:requestType", async (req, res) => {
  const { requestType } = req.params;
  try {
    const obsResponse = await obs.call(requestType);
    res.send(obsResponse);
  } catch (error) {
    res.send(error);
  }
});
router.post("/:requestType", async (req, res) => {
  const { requestType } = req.params;
  try {
    const obsRes = await obs.call(requestType, { ...req.body });
    res.send(obsRes);
  } catch (error) {
    res.send(
      `Failed to send request: CODE: ${error.code}, MESSAGE: ${error.message}`
    );
  }
});

module.exports = router;
