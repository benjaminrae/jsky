import fs from "fs";
import childProcess from "child_process";
import util from "util";

const exec = util.promisify(childProcess.exec);
const { log } = console;

log("\n\x1b[33mExecuting pre-commit hook...");

const preCommit = async () => {
  const staged = await exec("git diff --cached --name-only");

  const stagedFilesWithJsOrTs = staged.stdout
    .split("\n")
    .filter(
      (stagedFile) => stagedFile.endsWith(".js") || stagedFile.endsWith(".ts")
    );

  stagedFilesWithJsOrTs.forEach((stagedFile) => {
    const readFile = fs.readFileSync(stagedFile, "utf8").trim();

    if (readFile.includes("console.log")) {
      log(
        `\n\x1b[31mCOMMIT REJECTED!  Found console/debugger references in ${stagedFile}. Please remove them before committing.\n`
      );
      process.exit(1);
    }

    if (readFile.includes("debugger")) {
      log(
        `\n\x1b[31mCOMMIT REJECTED!  Found debugger references in ${stagedFile}. Please remove them before committing.\n`
      );
      process.exit(1);
    }
  });

  log("\n\x1b[32mNo console. or debugger references found!\n");
  log("\x1b[32mGit pre-commit hook was successful!\n");

  process.exit(0);
};

await preCommit();
