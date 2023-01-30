const {
  obs,
  defaultSceneName,
  defaultWebCamName,
  webCamSourceName,
} = require("./constants");
const connect = async () => {
  try {
    const { obsWebSocketVersion, negotiatedRpcVersion } = await obs.connect(
      "ws://192.168.100.190:4455",
      "123456",
      { rpcVersion: 1 }
    );

    return `Connected to server ${obsWebSocketVersion} (using RPC ${negotiatedRpcVersion})`;
  } catch (error) {
    console.error("Failed to connect", error.code, error.message);
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
      server: "rtmp://192.168.100.190/live",
      use_auth: false,
    },
  });
};

const startStreamService = async () => await obs.call("StartStream");

module.exports = {
  connect,
  getWebCamSceneId,
  createWebCamSource,
  setStreamServiceSettings,
  startStreamService,
};
