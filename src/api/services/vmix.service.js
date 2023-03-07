const { Connection } = require("node-vmix");
const { defaultIpAddress } = require("../../constants");

const connect = async (address) => {
  try {
    vMix = new Connection(address);
    return vMix;
  } catch (error) {
    return new Error(
      `Could not successfuly connect to vMix on address: ${
        address || defaultIpAddress
      }`
    );
  }
};

module.exports = { connect };
