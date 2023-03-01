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
    res.send(
      `${requestType} request made succesfully.\n Response: ${JSON.stringify(
        obsResponse
      )}`
    );
  } catch (error) {
    res.send(
      `Failed to send request: CODE: ${error.code}, MESSAGE: ${error.message}`
    );
  }
});

router.post("/ToggleWithTransitionScene", async (req, res) => {
  // Execute a transition sequence to a different scene with a specific transition.
  try {
    const { sceneName, transitionName } = req.body;

    await obs.callBatch([
      {
        requestType: "SetCurrentPreviewScene",
        requestData: { sceneName },
      },
      {
        requestType: "SetCurrentSceneTransition",
        requestData: { transitionName },
      },
      {
        requestType: "Sleep",
        requestData: { sleepMillis: 100 },
      },
      {
        requestType: "TriggerStudioModeTransition",
      },
    ]);
    res.send(`ToggleWithTransitionScene request made succesfully.\n}`);
  } catch (error) {
    res.send(
      `Failed to send request: CODE: ${error.code}, MESSAGE: ${error.message}`
    );
  }
});

router.post("/:requestType", async (req, res) => {
  console.log('General Reqeust');
  const { requestType } = req.params;
  try {
    const obsResponse = await obs.call(requestType, { ...req.body });
    res.send(
      `${requestType} request made succesfully.\n Response: ${JSON.stringify(
        obsResponse
      )}`
    );
  } catch (error) {
    res.send(
      `Failed to send request: CODE: ${error.code}, MESSAGE: ${error.message}`
    );
  }
});


module.exports = router;
