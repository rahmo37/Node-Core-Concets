// Will write child process code here
const { spawn, exec } = require("node:child_process");

const subprocess = spawn("echo", ["some string"]);

subprocess.stdout.on("data", (data) => {
  console.log(data.toString("utf-8"));
});
