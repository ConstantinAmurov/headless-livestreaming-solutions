// Imports
const {
  connect,
  getWebCamSceneId,
  createWebCamSource,
} = require("./functions");
const { obs, defaultSceneName } = require("./constants");

// Event Listeners
obs.on("ConnectionOpened", () => {
  console.log("Connection Opened");
});

obs.on("Identified", async () => {
  console.log("Identified, good to go!");

  // Send some requests.
  obs.call("GetSceneList").then((data) => {
    console.log("Scenes:", data);
  });
  //   obs.call("CreateScene", { sceneName: "TestScene" }).then((data) => {
  //     console.log("CreateScene", data);
  //   });

  obs.call("GetInputList").then((data) => {
    console.log("GetInputList:", data);
  });
  obs.call("GetSpecialInputs").then((data) => {
    console.log("GetSpecialInputs:", data);
  });
  obs.call("GetInputKindList").then((data) => {
    console.log("GetInputKindList:", data);
  });

  await createWebCamSource();
  const webCamSceneId = await getWebCamSceneId();

  console.log("WebCamSceneId", webCamSceneId);

  const { sceneItemTransform: webCamSceneItemTransform } = await obs.call(
    "GetSceneItemTransform",
    {
      sceneName: defaultSceneName,
      sceneItemId: webCamSceneId,
    }
  );

  obs
    .call("SetSceneItemTransform", {
      sceneName: defaultSceneName,
      sceneItemId: webCamSceneId,
      sceneItemTransform: {
        ...webCamSceneItemTransform,
        boundsWidth: 1,
        boundsHeight: 1,
        positionX: 0,
        positionY: 900,
        height: "400.0px",
        width: "200.0px",
      },
    })
    .then(() => console.log("Successfuly Changed Item Transform"));
});

obs.on("SwitchScenes", (data) => {
  console.log("SwitchScenes", data);
});

// Connection
connect().then((value) => console.log(value));

// Functions
