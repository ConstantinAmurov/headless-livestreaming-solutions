const fluent = require("fluent-ffmpeg");
const { defaultRTMPIpAdress } = require("../../constants");

const createFFMPEGProcess = (args) => {
  let command = fluent().output(" "); // pass "Invalid output" validation
  command._outputs[0].isFile = false; // disable adding "-y" argument
  command._outputs[0].target = ""; // bypass "Unable to find a suitable output format for ' '"

  command._global.get = () => {
    // append custom arguments
    return typeof args === "string" ? args.split(" ") : args;
  };
  return command;
};

class FFMPEG {
  constructor(rtmpServer) {
    this.rtmpServerIP = rtmpServer || defaultRTMPIpAdress;
  }

  #process = undefined;

  setRTMPServerIp(rtmpServer) {
    this.rtmpServerIP = rtmpServer;
  }

  connect(rtmpServerIP) {
    if (rtmpServerIP) {
      this.setRTMPServerIp(rtmpServerIP);
    }

    this.#process = createFFMPEGProcess(
      `-re -stream_loop -1 -i /home/ubuntu/wait.mp4 -c:a aac -f flv ${this.rtmpServerIP}`
    );

    this.#process.run();
  }

  toggleScene(path) {
    this.#process.kill();
    this.process = createFFMPEGProcess(
      `-re -i ${path} -c:a aac -f flv ${this.rtmpServerIP}`
    );
    this.#process.run();
  }

  kill() {
    this.#process.kill();
  }
}

const ffmpeg = new FFMPEG();

module.exports = { ffmpeg };
