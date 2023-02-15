const hooks = ["pre-commit", "commit-msg", "pre-push"];
const packageManagers = ["npm", "yarn", "pnpm"];

export const typescriptQuestion = {
  type: "confirm",
  name: "hasTypescript",
  message: "Does your project use TS?",
  default: true,
};

export const hooksQuestion = {
  type: "checkbox",
  name: "hooks",
  message: "Which hooks do you want to add to your project?",
  choices: hooks,
};

export const jsxQuestion = {
  type: "confirm",
  name: "hasJsx",
  message: "Does your project use JSX?",
  default: true,
};

export const packageManagerQuestion = {
  type: "list",
  name: "packageManager",
  message: "Which package manager are you using?",
  choices: packageManagers,
  default: "npm",
};

const questions = [
  typescriptQuestion,
  jsxQuestion,
  hooksQuestion,
  packageManagerQuestion,
];

export default questions;
