const core = require("@actions/core");
const github = require("@actions/github");

try {
  const time = new Date().toISOString();
  core.setOutput("time", time);
  
  const unixTime = Date.now();
  core.setOutput("unixTime", unixTime);
} catch (error) {
  core.setFailed(error.message);
}
