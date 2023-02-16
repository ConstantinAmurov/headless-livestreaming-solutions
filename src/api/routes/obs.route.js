const express = require("express");
const router = express.Router();

const { connect } = require("../services/obs.service");

router.post("/connect", async (req, res) => {
  const data = req.body;

  const response = await connect(data);

  res.send(response);
});

module.exports = router;
