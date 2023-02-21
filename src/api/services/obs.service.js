const {
  defaultSceneName,
  defaultWebCamName,
  webCamSourceName,
  defaultRTMPIpAdress,
} = require("../../constants");

const OBSWebSocket = require("obs-websocket-js").default;
const obs = new OBSWebSocket();

const connect = async (data) => {
  let response;

  try {
    if (!data) {
      response = await obs.connect();
    } else {
      const { address, password } = data;
      // !TODO Add address validation in future
      response = await obs.connect(address, password);
    }

    const { obsWebSocketVersion } = response;
    return `Connected to server version: ${obsWebSocketVersion}`;
  } catch (error) {
    return `"Failed to connect", ${error.code}, ${error.message}`;
  }
};

const createWebCamSource = async () => {
  try {
    await obs.call("CreateInput", {
      sceneName: defaultSceneName,
      inputName: defaultWebCamName,
      inputKind: webCamSourceName,
    });

    console.log(
      `Successfully created a ${webCamSourceName} on ${defaultSceneName} scene with ${defaultWebCamName} name`
    );
  } catch (error) {
    console.log("A WebCam with the same input name already exists");
  }
};
const getWebCamSceneId = async () => {
  try {
    const { sceneItemId } = await obs.call("GetSceneItemId", {
      sceneName: defaultSceneName,
      sourceName: defaultWebCamName,
    });
    return sceneItemId;
  } catch (error) {
    console.error("Failed to connect", error.code, error.message);
  }
};

const setStreamServiceSettings = async () => {
  await obs.call("SetStreamServiceSettings", {
    streamServiceType: "rtmp_custom",
    streamServiceSettings: {
      bwtest: false,
      key: "test",
      server: defaultRTMPIpAdress,
      use_auth: false,
    },
  });
};

const startStreamService = async () => await obs.call("StartStream");

module.exports = {
  obs,
  connect,
  getWebCamSceneId,
  createWebCamSource,
  setStreamServiceSettings,
  startStreamService,
};
