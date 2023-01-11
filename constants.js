const OBSWebSocket = require("obs-websocket-js").default;
const obs = new OBSWebSocket();

const defaultSceneName = "Scene";
const defaultWebCamName = "WebCam";
const webCamSourceName = "v4l2_input";

module.exports = {
  obs,
  defaultSceneName,
  defaultWebCamName,
  webCamSourceName,
};
