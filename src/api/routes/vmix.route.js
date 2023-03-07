const express = require("express");
const router = express.Router();

const { connect } = require("../services/vmix.service");
let vMix;

router.post("/connect", async (req, res) => {
  const { address } = req.body;
  console.log(address);
  try {
    vMix = await connect(address);
    res.send("Successfuly connected to vMix Instance");
  } catch (error) {
    res.send(
      `Failed to send request: CODE: ${error.code}, MESSAGE: ${error.message}`
    );
  }
});

router.post("/:requestType", async (req, res) => {
  const { requestType } = req.params;

  try {
    const vMixResponse = await vMix.send({
      Function: requestType,
      ...req.body,
    });

    res.send(
      `${requestType} request made succesfully.\n Response: ${JSON.stringify(
        vMixResponse
      )}`
    );
  } catch (error) {
    res.send(
      `Failed to send request: CODE: ${error.code}, MESSAGE: ${error.message}`
    );
  }
});

module.exports = router;
