const defaultIpAddress = "localhost";
const defaultPort = 27015;

const defaultRTMPIpAdress = `rtmp://${defaultIpAddress}/live/`;
const defaultSceneName = "Scene";
const defaultWebCamName = "WebCam";
const webCamSourceName = "v4l2_input";

module.exports = {
  defaultSceneName,
  defaultWebCamName,
  webCamSourceName,
  defaultIpAddress,
  defaultPort,
  defaultRTMPIpAdress,
};
