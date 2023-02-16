const OBSWebSocket = require("obs-websocket-js").default;
const obs = new OBSWebSocket();

// const defaultIpAddress = "192.168.0.108";
const defaultIpAddress = "localhost";
const defaultPort = 27015;

const defaultRTMPIpAdress = `rtmp://${defaultIpAddress}/live/`;
const defaultSceneName = "Scene";
const defaultWebCamName = "WebCam";
const webCamSourceName = "v4l2_input";

module.exports = {
  obs,
  defaultSceneName,
  defaultWebCamName,
  webCamSourceName,
  defaultIpAddress,
  defaultPort,
  defaultRTMPIpAdress,
};
