// Imports
// const {
//   connect,
//   getWebCamSceneId,
//   createWebCamSource,
//   setStreamServiceSettings,
//   startStreamService,
// } = require("./functions");
// const { obs, defaultSceneName } = require("./constants");
const { defaultIpAddress, defaultPort } = require("./constants");
const app = require("./config/express.config");
// import app from "./config/express.config";

app.listen(defaultPort , (err) => {
  if (err) {
    console.error("server failed to start", err);
  }
  console.log(`server running on http://${defaultIpAddress}:${defaultPort}`);
});

// Event Listeners
// obs.on("ConnectionOpened", () => {
//   console.log("Connection Opened");
// });

// obs.on("Identified", async () => {
//   console.log("Identified, good to go!");

//   // Send some requests.
//   obs.call("GetSceneList").then((data) => {
//     console.log("Scenes:", data);
//   });
//   //   obs.call("CreateScene", { sceneName: "TestScene" }).then((data) => {
//   //     console.log("CreateScene", data);
//   //   });

//   obs.call("GetInputList").then((data) => {
//     console.log("GetInputList:", data);
//   });
//   obs.call("GetSpecialInputs").then((data) => {
//     console.log("GetSpecialInputs:", data);
//   });
//   obs.call("GetInputKindList").then((data) => {
//     console.log("GetInputKindList:", data);
//   });

//   await createWebCamSource();
//   const webCamSceneId = await getWebCamSceneId();

//   console.log("WebCamSceneId", webCamSceneId);

//   const { sceneItemTransform: webCamSceneItemTransform } = await obs.call(
//     "GetSceneItemTransform",
//     {
//       sceneName: defaultSceneName,
//       sceneItemId: webCamSceneId,
//     }
//   );

//   obs
//     .call("SetSceneItemTransform", {
//       sceneName: defaultSceneName,
//       sceneItemId: webCamSceneId,
//       sceneItemTransform: {
//         ...webCamSceneItemTransform,
//         boundsWidth: 1,
//         boundsHeight: 1,
//         positionX: 0,
//         positionY: 900,
//         height: "400.0px",
//         width: "200.0px",
//       },
//     })
//     .then(() => console.log("Successfuly Changed Item Transform"));

//   await setStreamServiceSettings();
//   await startStreamService();
// });

// obs.on("SwitchScenes", (data) => {
//   console.log("SwitchScenes", data);
// });

// // Connection
// connect().then((value) => console.log(value));

// Functions
// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");

// // create application/json parser
// const jsonParser = bodyParser.json();

// // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.get("/", (req, res) => {
//   res.status(200).send("Hi");
// });

// app.get("/:requestType", async (req, res) => {
//   const { requestType } = req.params;
//   const obsRes = await obs.call(requestType);
//   res.send(obsRes);
// });

// app.post("/:requestType", jsonParser, urlencodedParser, async (req, res) => {
//   const { requestType } = req.params;

//   await obs.call(requestType, { ...req.body });

//   res.send("Success");
// });

// // MIDDLEWARE
// app.use(bodyParser.json());
// // app.use(express.urlencoded({ extended: true }));

// app.listen(PORT, () =>
//   console.log(`express.js running on http://localhost:${PORT}`)
// );
