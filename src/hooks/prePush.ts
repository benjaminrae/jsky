import childProcess from "child_process";
import util from "util";

const exec = util.promisify(childProcess.exec);

const branchCheck = /^((hotfix|bugfix|feature)\/[a-zA-Z0-9-]+)$/g;

const prePush = async () => {
  const branchName = await exec("git rev-parse --abbrev-ref HEAD");

  if (!branchCheck.test(branchName as unknown as string)) {
    console.log("\n\x1b[31mPlease check your branch name.\n");
    process.exit(1);
  }

  console.log("\n\x1b[32mBranch pushed succesfully\n");

  process.exit(0);
};

await prePush();
