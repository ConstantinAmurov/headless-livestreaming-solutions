const { defaultIpAddress, defaultPort } = require("./constants");
const app = require("./config/express.config");

app.listen(defaultPort, (err) => {
  if (err) {
    console.error("server failed to start", err);
  }
  console.log(`server running on http://${defaultIpAddress}:${defaultPort}`);
});
