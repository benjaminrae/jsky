import fs from "fs";

const commitMsg = async () => {
  const message = fs.readFileSync(process.argv[2], "utf8").trim();

  if (message.length < 10 || message.length > 72) {
    console.log(
      "\n\x1b[31m(ERROR) The length of the commit message has to be between 10 and 72 characters.\n"
    );
    process.exit(1);
  }

  process.exit(0);
};

await commitMsg();
